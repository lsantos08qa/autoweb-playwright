async function customLogin(page, username, password) {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Login' }).click();
    await page.locator('#user').fill(username);
    await page.locator('#password').fill(password);
    await page.getByRole('button', { name: 'login' }).click();
    
}

module.exports = { customLogin };