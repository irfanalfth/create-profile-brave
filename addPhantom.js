import puppeteer from "puppeteer-extra";
import fs from "fs-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

import { delay } from "./helper/utils.js";
import { baseTimeLog } from "./helper/log.js";
import generateWallet from "./helper/generateWallet.js";

puppeteer.use(StealthPlugin());

const executablePath = `C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe`;
const extensionPath = "D:\\Data\\bot\\profile-browser\\data\\extensions";
const phantomExtension = "bfnaelmomeimhlpmgjnjophhpkkoljpa";
const phantomExtensionVersion = "25.9.1_0";

const passwordWallet = "hahahihi";
const outputFile = `./data/output.csv`;

const userDataDir = (email) => {
  // /////// Ubah ke dir brave baru mu ///////////
  const pathUserData = `D:\\Data\\Brave-Browser\\User Data`;
  // ////////////////////////////////////////////

  return `${pathUserData}\\${email.replace(/[^a-zA-Z0-9]/g, "_")}`;
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

const writeToCSV = async (email, wallet) => {
  const data = `${email},${wallet.mnemonic},${wallet.ethereum.address},${wallet.ethereum.privateKey},${wallet.solana.publicKey},${wallet.solana.privateKey}\n`;

  if (!fs.existsSync(outputFile)) {
    await fs.writeFile(
      outputFile,
      "EMAIL,PHRASE,ETH,PK ETH,SOL,PK SOL\n",
      "utf-8"
    );
  }

  await fs.appendFile(outputFile, data, "utf-8");
  baseTimeLog(`Success add wallet${email}`, "greenBright");
};

(async () => {
  console.clear();
  console.log("\n");

  const listEmail = await fs.readFile(`./data/gmail.txt`, "utf-8");
  const arrEmail = listEmail
    .split("\n")
    .map((email) => email.trim())
    .filter((email) => email);

  for (let i = 0; i < arrEmail.length; i++) {
    let success = false;
    let email = arrEmail[i];
    let wallet = await generateWallet();

    let userDataPath = userDataDir(email);
    let extension = `${extensionPath}\\${phantomExtension}\\${phantomExtensionVersion}`;

    while (!success) {
      await delay(2000);

      try {
        baseTimeLog(`Processing ${email}`, "magentaBright");

        const browser = await puppeteer.launch({
          headless: false,
          executablePath: executablePath, // Pastikan path ini benar
          userDataDir: userDataPath, // Pastikan path ini benar
          args: [
            `--disable-extensions-except=${extension}`,
            `--load-extension=${extension}`,
          ],
        });

        let pages = await browser.pages();
        for (let i = 1; i < pages.length; i++) {
          await pages[i].close();
        }

        let page = pages[0];

        await page.goto(
          "chrome-extension://bfnaelmomeimhlpmgjnjophhpkkoljpa/onboarding.html",
          {
            waitUntil: "domcontentloaded",
          }
        );

        await delay(1500);
        await page.waitForSelector("button");

        await page.evaluate(() => {
          const buttons = [...document.querySelectorAll("button")];
          const targetButton = buttons.find((btn) =>
            btn.innerText.includes("I already have a wallet")
          );
          if (targetButton) targetButton.click();
        });

        await delay(3000);

        await page.waitForSelector(
          "#root > main > div._175sik91._51gazn24._51gazn3n._51gazn1hh._51gazn6p > div > div.t8qixv0.t8qixv1._51gazn8._51gazn1ho._51gazn1jc._51gazn1kv._51gazn19s._51gaznju > button:nth-child(2)",
          {
            timeout: 5000,
          }
        );

        await page.click(
          "#root > main > div._175sik91._51gazn24._51gazn3n._51gazn1hh._51gazn6p > div > div.t8qixv0.t8qixv1._51gazn8._51gazn1ho._51gazn1jc._51gazn1kv._51gazn19s._51gaznju > button:nth-child(2)"
        );

        await delay(1500);

        const phrase = wallet.mnemonic.split(" ");

        await page.keyboard.press("Tab", { delay: 40 });

        for (let i = 0; i < phrase.length; i++) {
          await page.keyboard.type(phrase[i]);
          await delay(50);
          await page.keyboard.press("Tab", { delay: 40 });
        }

        await delay(1500);

        await page.waitForSelector("button");

        await page.evaluate(() => {
          const buttons = [...document.querySelectorAll("button")];
          const targetButton = buttons.find((btn) =>
            btn.innerText.includes("Import Wallet")
          );
          if (targetButton) targetButton.click();
        });

        await delay(1500);

        await page.waitForSelector("button");

        await page.evaluate(() => {
          const buttons = [...document.querySelectorAll("button")];
          const targetButton = buttons.find((btn) =>
            btn.innerText.includes("Continue")
          );
          if (targetButton) targetButton.click();
        });

        await delay(1500);

        await page.keyboard.press("Tab", { delay: 50 });
        await page.keyboard.type(passwordWallet, { delay: 50 });
        await delay(500);

        await page.keyboard.press("Tab", { delay: 50 });
        await page.keyboard.type(passwordWallet, { delay: 50 });
        await delay(500);

        await page.waitForSelector(
          "#root > main > div._175sik91._51gazn24._51gazn3n._51gazn1hh._51gazn6p > form > div.sc-bkkeKt.sc-ieecCq.sc-eZhRLC.dKMndD.koynXW.gtfCKx > span > input[type=checkbox]",
          {
            timeout: 5000,
          }
        );

        await page.click(
          "#root > main > div._175sik91._51gazn24._51gazn3n._51gazn1hh._51gazn6p > form > div.sc-bkkeKt.sc-ieecCq.sc-eZhRLC.dKMndD.koynXW.gtfCKx > span > input[type=checkbox]"
        );

        await delay(1000);

        try {
          await page.evaluate(() => {
            const buttons = [...document.querySelectorAll("button")];
            const targetButton = buttons.find((btn) =>
              btn.innerText.includes("Continue")
            );
            if (targetButton) targetButton.click();
          });

          await delay(3000);

          await page.evaluate(() => {
            const buttons = [...document.querySelectorAll("button")];
            const targetButton = buttons.find((btn) =>
              btn.innerText.includes("Get Started")
            );
            if (targetButton) targetButton.click();
          });
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
        }

        await writeToCSV(email, wallet);
        await removeEmailFromFile(email);
        success = true;

        await browser.close();
      } catch (error) {
        baseTimeLog(`Error, ${error}`, "redBright");
        await browser.close();
      }
    }
  }
})();
