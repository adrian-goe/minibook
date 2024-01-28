import { expect, test } from '@playwright/test';

test('create Book', async ({ page, browserName }) => {
  let bookName;
  let isbn;

  if (browserName === 'chromium') {
    bookName = '1 test name chromium';
    isbn = '978-3742321398';
  } else if (browserName === 'firefox') {
    bookName = '1 test name firefox';
    isbn = '978-3830335658';
  } else if (browserName === 'webkit') {
    bookName = '1 test name webkit';
    isbn = '978-3959616461';
  }
  await page.setViewportSize({ width: 1385, height: 1355 });
  await page.goto('http://localhost:4200/create-book');

  await page.click('label:nth-of-type(1) > input');
  await page.fill('label:nth-of-type(1) > input', bookName);

  await page.press('body', 'Tab');

  await page.fill('label:nth-of-type(2) > input', isbn);

  await page.click('form');

  await page.click('select');
  await page.selectOption('select', 'e0b48fde-7bbb-469e-848b-3aea659220b0');

  await page.click('button');
  await page.waitForURL('/');

  expect(page.url()).toBe('http://localhost:4200/');

  const cardWithBook = await page.waitForSelector(`h2:text("${bookName}")`);
  expect(cardWithBook).toBeTruthy();
});
