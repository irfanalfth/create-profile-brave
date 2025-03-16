import crypto from "crypto";

export const getRandomMonthName = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const randomIndex = Math.floor(Math.random() * months.length);

  return months[randomIndex];
};

export const getRandomDayNumber = () => Math.floor(Math.random() * 28) + 1;

export const getRandomYear = () => {
  const minYear = 1970;
  const maxYear = new Date().getFullYear() - 18;

  return Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
};

export const generateDirName = () =>
  crypto.randomBytes(6).toString("hex").slice(0, 12);

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
