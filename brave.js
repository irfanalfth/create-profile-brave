import puppeteer from "puppeteer-extra";
import fs from "fs-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import path from "path";
import sudo from "sudo-prompt";

import { delay } from "./helper/utils.js";
import { baseTimeLog } from "./helper/log.js";

puppeteer.use(StealthPlugin());

const executablePath = `C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe`;
const shortcutDir = `D:\\Data\\Brave-Browser\\Shortcuts`;
const password = "qwertyui";

const userDataDir = (email) => {
  // /////// Ubah ke dir brave baru mu ///////////
  const pathUserData = `D:\\Data\\Brave-Browser\\User Data`;
  // ////////////////////////////////////////////

  return `${pathUserData}\\${email.replace(/[^a-zA-Z0-9]/g, "_")}`;
};

const createShortcut = async (email, userDataPath) => {
  const safeEmail = email.replace(/[^a-zA-Z0-9]/g, "_");
  const shortcutPath = path.join(shortcutDir, `${safeEmail}.lnk`);

  baseTimeLog(`Creating shortcut for ${email}...`, "magentaBright");

  if (!fs.existsSync(shortcutDir)) {
    fs.mkdirSync(shortcutDir, { recursive: true });
  }

  const command = `powershell -Command "& { $s=(New-Object -COM WScript.Shell).CreateShortcut('${shortcutPath}');$s.TargetPath='\\"${executablePath}\\"';$s.Arguments='--user-data-dir=\\"${userDataPath}\\"';$s.Save() }"`;

  sudo.exec(command, { name: "Shortcut Creator" }, (error) => {
    if (error) {
      baseTimeLog(`Failed to create shortcut: ${error.message}`, "redBright");
    } else {
      baseTimeLog(`Shortcut created: ${shortcutPath}`, "greenBright");
    }
  });
};

const removeEmailFromFile = async (email) => {
  let listEmail = await fs.readFile(`./data/gmail.txt`, "utf-8");
  let arrEmail = listEmail
    .split("\n")
    .map((email) => email.trim())
    .filter((email) => email);
  const updatedEmails = arrEmail.filter((e) => e !== email);
  await fs.writeFile(`./data/gmail.txt`, updatedEmails.join("\n"), "utf-8");
};

(async () => {
  console.clear();
  console.log("\n");

  if (!fs.existsSync(shortcutDir)) {
    fs.mkdirSync(shortcutDir, { recursive: true });
  }

  const listEmail = await fs.readFile(`./data/gmail.txt`, "utf-8");
  const arrEmail = listEmail
    .split("\n")
    .map((email) => email.trim())
    .filter((email) => email);

  for (let i = 0; i < arrEmail.length; i++) {
    let success = false;
    let email = arrEmail[i];

    let userDataPath = userDataDir(email);
    let browser;

    while (!success) {
      await delay(2000);

      try {
        baseTimeLog(`Processing ${email}`, "magentaBright");

        browser = await puppeteer.launch({
          headless: false,
          executablePath: executablePath,
          userDataDir: userDataPath,
          args: [`--user-data-dir=${userDataPath}`, "--new-window"],
        });

        let pages = await browser.pages();

        if (pages.length > 1) {
          for (let i = 1; i < pages.length; i++) {
            await pages[i].close();
          }
        }

        const page = pages[0];

        await page.goto("https://accounts.google.com/", {
          waitUntil: "domcontentloaded",
        });

        try {
          baseTimeLog(`Processing Login Gmail: ${email}`, "yellowBright");

          await delay(2000);

          await page.waitForSelector('input[type="email"]', {
            visible: true,
            timeout: 15000,
          });
          await page.type('input[type="email"]', email);

          await delay(2000);

          await page.waitForSelector("#identifierNext > div > button > span", {
            visible: true,
            timeout: 15000,
          });
          await page.click("#identifierNext > div > button > span");

          await delay(2000);

          await page.waitForSelector("input[type=password]", {
            visible: true,
            timeout: 15000,
          });
          await page.type("input[type=password]", password);

          await delay(2000);

          try {
            await page.waitForSelector(
              "#passwordNext > div > button > div.VfPpkd-RLmnJb",
              { visible: true, timeout: 5000 }
            );
            await page.click("input[type=password]");
          } catch (error) {}

          try {
            await page.waitForSelector("#passwordNext", {
              timeout: 3000,
            });
            await page.click("#passwordNext");
          } catch {}

          await delay(3000);

          try {
            await page.waitForSelector("#confirm", { timeout: 3000 });
            await page.click("#confirm");
          } catch {}

          await delay(3000);

          try {
            await page.waitForFunction(
              () =>
                document.evaluate(
                  `//span[contains(text(), 'Next') or contains(text(), 'Lanjutkan')]`,
                  document,
                  null,
                  XPathResult.FIRST_ORDERED_NODE_TYPE,
                  null
                ).singleNodeValue !== null
            );
            await page.evaluate(() => {
              const element = document.evaluate(
                `//span[contains(text(), 'Next') or contains(text(), 'Lanjutkan')]`,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
              ).singleNodeValue;
              if (element) {
                element.click();
              }
            });
          } catch {}

          await delay(5000);

          baseTimeLog(`Login Successful: ${email}`, "greenBright");
          await createShortcut(email, userDataPath);
          await removeEmailFromFile(email);
          success = true;
        } catch (error) {
          baseTimeLog(`Login Failed, Retrying: ${email}`, "blueBright");
          await browser.close();
          continue;
        }

        await browser.close();
      } catch (error) {
        baseTimeLog(`Error, ${error}`, "redBright");
        await browser.close();
      }
    }
  }
})();
