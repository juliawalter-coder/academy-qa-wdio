import { WebBasePage } from './WebBasePage';

class DropDownPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('dropdown');
  }
}

export default new DropDownPage();