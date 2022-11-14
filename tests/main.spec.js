import { test, expect } from '@playwright/test';

// Use 'npm run start' before running test
test('testing Workflow BVPK Logo', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('link', { name: 'Workflow BVPK Logo' }).click();
  await expect(page).toHaveURL('http://localhost:3001/');
});

test('testing Der BVPK', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.getByRole('link', { name: 'Der BVPK' }).click();
    await expect(page).toHaveURL('http://localhost:3001/ueber-uns');
});

test('testing Aktuelles', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.getByRole('link', { name: 'Aktuelles' }).click();
    await expect(page).toHaveURL('http://localhost:3001/aktuelles');
});

test('testing Presse', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.getByRole('link', { name: 'Presse' }).click();
    await expect(page).toHaveURL('http://localhost:3001/presse');
});

test('testing Umwelt', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.getByRole('link', { name: 'Umwelt' }).click();
    await expect(page).toHaveURL('http://localhost:3001/umweltbelastung-feuerwerk');
});

test('testing Positionen', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.getByRole('link', { name: 'Positionen' }).click();
    await expect(page).toHaveURL('http://localhost:3001/positionen');
});

test('testing Kontakt', async ({ page }) => {
    await page.goto('http://localhost:3001/');
    await page.locator('nav:has-text("Der BVPKAktuellesPresseUmweltPositionenKontakt")').getByRole('link', { name: 'Kontakt' }).click();
    await expect(page).toHaveURL('http://localhost:3001/kontakt');
});

