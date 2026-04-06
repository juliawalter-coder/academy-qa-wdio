import { WebBasePage } from './WebBasePage';

class ForgotPasswordPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('forgot_password');
  }

  get InternalServerErrorWindow() {
    return $('body > h1');
  }

  get emailInput() {
    return $('#email');
  }

  get retrievePasswordButton() {
    return $('#form_submit');
  }

  async submitResetPasswordForm(email) {
    await this.emailInput.setValue(email);
    await this.retrievePasswordButton.click();
  }

}

export default new ForgotPasswordPage();