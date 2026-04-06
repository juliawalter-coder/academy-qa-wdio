import { WebBasePage } from './WebBasePage';

class ForgotPasswordPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('forgot_password');
  }
}

export default new ForgotPasswordPage();