import LoginPage from '../../../pages/web/herokuapp/LoginPage';
import SecureAreaPage from '../../../pages/web/herokuapp/SecureAreaPage';

describe('Login', () => {
  it('should display success message', async () => {
    await LoginPage.navigate();

    await LoginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    await expect(SecureAreaPage.successMessage).toBeDisplayedInViewport();

    await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');
  });
});
