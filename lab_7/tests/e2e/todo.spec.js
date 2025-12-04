import { test, expect } from '@playwright/test'

test('Сценарій 1 — відкриття головної сторінки Todo', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  await page.screenshot({ path: 'screenshots/open-page.png' })

  await expect(page.locator('h1')).toHaveText('Todo App')
})

test('Сценарій 2 — додавання та видалення задачі', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const input = page.getByPlaceholder('Enter new task')
  const addButton = page.getByRole('button', { name: 'Add' })

  await input.fill('Test task')
  await addButton.click()

  const newTask = page.getByText('Test task')
  await expect(newTask).toBeVisible()

  const deleteButton = newTask.locator('xpath=../button')
  await deleteButton.click()

  await expect(newTask).not.toBeVisible()
})

test('Сценарій 3 — фільтрація (активні/виконані)', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  const firstTaskCheckbox = page.locator('li >> nth=0 >> input[type="checkbox"]')
  await firstTaskCheckbox.click()

  await page.getByRole('button', { name: 'Done' }).click()

  const tasks = page.locator('li')
  await expect(tasks).toHaveCount(1)
})
