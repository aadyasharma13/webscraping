// server.js

const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3000;

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto('https://www.imdb.com/showtimes/title/tt5950044/?ref_=shlc_i_1', {
    waitUntil: 'networkidle2',
  });
  await page.waitForSelector('#__next > main > div > section > section > div:nth-child(4) > section > section > div.sc-694b8409-4.egkhfE > hgroup > h2', { timeout: 10000 });
  const title = await page.$eval('#__next > main > div > section > section > div:nth-child(4) > section > section > div.sc-694b8409-4.egkhfE > hgroup > h2', el => el.innerText);
  console.log(title);


  await page.waitForSelector('#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > div > div.sc-29531a57-0.egasLR > span > div > span > span.ipc-rating-star--rating', { timeout: 10000 });
  const rating = await page.$eval('#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > div > div.sc-29531a57-0.egasLR > span > div > span > span.ipc-rating-star--rating', el => el.innerText);
  console.log(rating);


  await page.waitForSelector('#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > div > div.sc-29531a57-0.egasLR > div > span:nth-child(1)', { timeout: 10000 });
  const year = await page.$eval('#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > div > div.sc-29531a57-0.egasLR > div > span:nth-child(1)', el => el.innerText);
  console.log(year);


  await page.waitForSelector('#__next > main > div > section > section > div:nth-child(4) > section > section > div.sc-694b8409-4.egkhfE > div.sc-694b8409-13.pkaYM > button:nth-child(2) > span > div > span.sc-67d756cf-2.kggakN', { timeout: 10000 });
  const release = await page.$eval('#__next > main > div > section > section > div:nth-child(4) > section > section > div.sc-694b8409-4.egkhfE > div.sc-694b8409-13.pkaYM > button:nth-child(2) > span > div > span.sc-67d756cf-2.kggakN', el => el.innerText);
  console.log(release);

  await page.waitForSelector('#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > div > div.sc-9d52d06f-1.bDNbpf > div > div', { timeout: 10000 });
  const summary = await page.$eval('#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > div > div.sc-9d52d06f-1.bDNbpf > div > div', el => el.innerText);
  console.log(summary);

  // Click "Watch trailer" button if available
  const trailerBtnSelector = '#__next > main > div > section > div > section > div > div.sc-e1aae3e0-1.eEFIsG.ipc-page-grid__item.ipc-page-grid__item--span-2 > section.ipc-page-section.ipc-page-section--base.ipc-page-section--bp-s.ipc-page-section--sp-pageMargin.sc-89c9eb97-0.bERkWU > div > a';
  const trailerBtnExists = await page.$(trailerBtnSelector);
  if (trailerBtnExists) {
    console.log("Clicking 'Watch trailer' button...");
    await page.click(trailerBtnSelector);
    await new Promise(resolve => setTimeout(resolve, 5000)); // Allow time for trailer overlay to appear
  }

  await browser.close();
})();