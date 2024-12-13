const { test, expect } = require('@playwright/test');
const { customLogin } = require('../support/pages');

// teste sem comando personalizado
// test('Deve realizar login com sucesso', async ({ page }) => {

//   await page.goto('https://automationpratice.com.br/');
//   await page.getByRole('link', { name: ' Login' }).click();
//   await page.locator('#user').fill('aluno@teste.com');
//   await page.locator('#password').fill('teste123');
//   await page.getByRole('button', { name: 'login' }).click();
//   await expect(page.getByText('Olá, aluno@teste.com')).toBeVisible();
//   await page.getByRole('button', { name: 'OK' }).click();

//  });

test('Deve realizar login com sucesso usando comando personalizado', async ({ page }) => { 

  await customLogin(page, 'aluno@teste.com', 'teste123'); 
  await expect(page.getByText('Olá, aluno@teste.com')).toBeVisible(); 
  await page.getByRole('button', { name: 'OK' }).click(); 

});

//teste sem comando personalizado
// test('Deve apresentar mensagem de erro ao inserir credencial inváldida', async ({ page }) => {

//     await page.goto('https://automationpratice.com.br/');
//     await page.getByRole('link', { name: ' Login' }).click();
//     await page.locator('#user').fill('aluno@@teste.com'); //credencial errada
//     await page.locator('#password').fill('testee0123'); //credencial errada
//     await page.getByRole('button', { name: 'login' }).click();
//     await expect(page.getByText('E-mail inválido.')).toBeVisible();

// });

test('Deve apresentar mensagem de erro ao inserir credencial inváldida', async ({ page }) => {

  await customLogin(page, 'aluno@@teste.com', 'testee0123'); //credenciais erradas
  await expect(page.getByText('E-mail inválido.')).toBeVisible();
  
});

