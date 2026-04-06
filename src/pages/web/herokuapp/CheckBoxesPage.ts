import { WebBasePage } from './WebBasePage';

class CheckBoxesPage extends WebBasePage {
  public async navigate(): Promise<void> {
    await super.navigate('checkboxes');
  }

  get checkBoxValue1() {
    return $('input[type=checkbox]:nth-child(1)');
  }

  get checkBoxValue2() {
    return $('input[type=checkbox]:nth-child(3)');
  }

  async checkBoxValue1Click() {
    await this.checkBoxValue1.click();
  }

  async checkBoxValue2Click() {
    await this.checkBoxValue2.click();
  }
}

export default new CheckBoxesPage();