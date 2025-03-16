import chalk from "chalk";
import { Twisters } from "twisters";

const getTimestamp = () => `[ ${new Date().toLocaleTimeString()} ]`;

const colorMap = {
  red: chalk.red,
  green: chalk.green,
  yellow: chalk.yellow,
  blue: chalk.blue,
  magenta: chalk.magenta,
  cyan: chalk.cyan,
  white: chalk.white,
  gray: chalk.gray,
  black: chalk.black,
  redBright: chalk.redBright,
  greenBright: chalk.greenBright,
  yellowBright: chalk.yellowBright,
  blueBright: chalk.blueBright,
  magentaBright: chalk.magentaBright,
  cyanBright: chalk.cyanBright,
  whiteBright: chalk.whiteBright,
  blackBright: chalk.blackBright,
  bgRed: chalk.bgRed,
  bgGreen: chalk.bgGreen,
  bgYellow: chalk.bgYellow,
  bgBlue: chalk.bgBlue,
  bgMagenta: chalk.bgMagenta,
  bgCyan: chalk.bgCyan,
  bgWhite: chalk.bgWhite,
  bgBlack: chalk.bgBlack,
  bgRedBright: chalk.bgRedBright,
  bgGreenBright: chalk.bgGreenBright,
  bgYellowBright: chalk.bgYellowBright,
  bgBlueBright: chalk.bgBlueBright,
  bgMagentaBright: chalk.bgMagentaBright,
  bgCyanBright: chalk.bgCyanBright,
  bgWhiteBright: chalk.bgWhiteBright,
  bgBlackBright: chalk.bgBlackBright,
};

/**
 * Logs a message with optional color formatting
 * @param {string} title - Primary message or title to log
 * @param {string} [colorTitle] - Color for the title text (from colorMap)
 * @param {string} [text=null] - Optional secondary text to log
 * @param {string} [colorText=null] - Color for the secondary text (from colorMap)
 * @example
 * // Log with colored title
 * baseLog('Success', 'green');
 *
 * // Log with colored title and text
 * baseLog('Error', 'red', 'Something went wrong', 'redBright');
 * @throws {Error} Logs error if color formatting fails
 */
export const baseTimeLog = (
  title,
  colorTitle,
  text = null,
  colorText = null
) => {
  try {
    const chalkColorTitle = colorMap[colorTitle];
    const chalkColorText = colorMap[colorText];

    if (chalkColorTitle && chalkColorText) {
      console.log(
        `${getTimestamp()} ${chalkColorTitle(title)} : ${chalkColorText(text)}`
      );
    } else if (chalkColorTitle) {
      console.log(`${getTimestamp()} ${chalkColorTitle(title)}`);
    } else {
      console.log(`${getTimestamp()} ${title}`);
    }
  } catch (err) {
    console.error("Error logging message:", err.message);
  }
};

/**
 * Logs a message with optional color formatting
 * @param {string} name - Key name for log
 * @param {string} status - Curret status for log
 * @param {string} title - Primary message or title to log
 * @param {string} [colorTitle] - Color for the title text (from colorMap)
 * @param {string} [text=null] - Optional secondary text to log
 * @param {string} [colorText=null] - Color for the secondary text (from colorMap)
 * @example
 * // Log with colored title
 * baseLog('Success', 'green');
 *
 * // Log with colored title and text
 * baseLog('Error', 'red', 'Something went wrong', 'redBright');
 * @throws {Error} Logs error if color formatting fails
 */
export const twistersTimeLog = (
  name,
  status,
  title,
  colorTitle,
  text = null,
  colorText = null
) => {
  const twisters = new Twisters({
    messageDefaults: {
      render: (message, frame) => {
        const { active, text, meta } = message;
        const txt = `${getTimestamp()} ${chalk.whiteBright(text)}`;
        const rendered = active && frame ? `${frame} ${txt}` : txt;
        return meta && meta.indent ? indent(rendered, meta.indent) : rendered;
      },
    },
  });

  const chalkColorTitle = colorMap[colorTitle];
  const chalkColorText = colorMap[colorText];
  let msg = "";

  if (chalkColorTitle && chalkColorText) {
    msg = `${chalkColorTitle(title)} : ${chalkColorText(text)}`;
  } else if (chalkColorTitle) {
    msg = `${chalkColorTitle(title)}`;
  } else {
    msg = `${title}`;
  }

  twisters.put(name, {
    active: status,
    text: msg,
  });
};

/**
 * Pretty prints an object or array with indentation
 * @param {Object|Array} data - The data to be printed
 * @param {number} [spaces=2] - Number of spaces for indentation
 */
export const prettyPrint = (data, spaces = 2) => {
  console.log(JSON.stringify(data, null, spaces));
};

/**
 * Deep logs an object with full nested structure visibility
 * @param {Object} obj - The object to be logged
 * @param {Object} [options={}] - Additional logging options
 */
export const deepLog = (obj, options = {}) => {
  console.dir(obj, {
    depth: options.depth || null,
    colors: options.colors || true,
  });
};

/**
 * Logs objects with custom formatting and optional prefix
 * @param {Object} obj - The object to be logged
 * @param {string} [name= ''] - Optional name for the log
 */
export const formatLog = (obj, name = "") => {
  console.log("📋 Logged Data : " + name);
  console.log("--------------------");
  console.log(JSON.stringify(obj, null, 2));
  console.log("--------------------");
};

export default {
  baseTimeLog,
  twistersTimeLog,
  prettyPrint,
  deepLog,
  formatLog,
};
