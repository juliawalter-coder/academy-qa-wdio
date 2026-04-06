import { WebBasePage } from './WebBasePage';

class CheckBoxesPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('checkboxes');
  }
}

export default new CheckBoxesPage();