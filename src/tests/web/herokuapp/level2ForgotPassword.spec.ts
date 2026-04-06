import ForgotPasswordPage from '../../../pages/web/herokuapp/ForgotPasswordPage';

describe('Level 1 - Button click scenario', () => {

  it('ACT002 - Retrieve password - Internal server error window', async () => {
    await ForgotPasswordPage.navigate();
    await ForgotPasswordPage.submitResetPasswordForm('teste@test.com');
    //Internal server error window
    await expect(ForgotPasswordPage.InternalServerErrorWindow).toHaveText('Internal Server Error');
  })
})