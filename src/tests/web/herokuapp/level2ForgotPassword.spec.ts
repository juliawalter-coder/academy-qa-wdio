import ForgotPasswordPage from '../../../pages/web/herokuapp/ForgotPasswordPage';

describe('Level 2 - Fill input', () => {

  it('ACT002 - Retrieve password - Internal server error window', async () => {
    await ForgotPasswordPage.navigate();
    await ForgotPasswordPage.submitResetPasswordForm(process.env.EMAIL!);
    await expect(ForgotPasswordPage.InternalServerErrorWindow).toHaveText('Internal Server Error');
  })
})