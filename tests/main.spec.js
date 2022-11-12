import { test, expect } from '@playwright/test';

test('testing Workflow BVPK Logo', async ({ page }) => {
  await page.goto('https://bvpk.org/');
  await page.getByRole('link', { name: 'Workflow BVPK Logo' }).click();
  await expect(page).toHaveURL('https://bvpk.org/');
});

test('testing Der BVPK', async ({ page }) => {
    await page.goto('https://bvpk.org/');
    await page.getByRole('link', { name: 'Der BVPK' }).click();
    await expect(page).toHaveURL('https://bvpk.org/ueber-uns');
});

test('testing Der BVPK', async ({ page }) => {
    await page.goto('https://bvpk.org/');
    await page.getByRole('link', { name: 'Aktuelles' }).click();
    await expect(page).toHaveURL('https://bvpk.org/aktuelles');
});

test('testing Presse', async ({ page }) => {
    await page.goto('https://bvpk.org/');
    await page.getByRole('link', { name: 'Presse' }).click();
    await expect(page).toHaveURL('https://bvpk.org/presse');
});

test('testing Umwelt', async ({ page }) => {
    await page.goto('https://bvpk.org/');
    await page.getByRole('link', { name: 'Umwelt' }).click();
    await expect(page).toHaveURL('https://bvpk.org/umweltbelastung-feuerwerk');
});

test('testing Positionen', async ({ page }) => {
    await page.goto('https://bvpk.org/');
    await page.getByRole('link', { name: 'Positionen' }).click();
    await expect(page).toHaveURL('https://bvpk.org/positionen');
});

test('testing Kontakt', async ({ page }) => {
    await page.goto('https://bvpk.org/');
    await page.locator('nav:has-text("Der BVPKAktuellesPresseUmweltPositionenKontakt")').getByRole('link', { name: 'Kontakt' }).click();
    await expect(page).toHaveURL('https://bvpk.org/kontakt');
});

