import { WebBasePage } from './WebBasePage';

class DropDownPage extends WebBasePage {
  public async navigate(): Promise<void> {
    await super.navigate('dropdown');
  }

  get dropDownField() {
    return $('#dropdown');
  }

  get dropDownFieldOptions() {
    return $$('#dropdown option');
  }

  async dropDownFieldClick() {
    await this.dropDownField.click();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  async selectDropDownOptionByAttribute(attribute, number) {
    await this.dropDownField.selectByAttribute(attribute, number);
  }
}

export default new DropDownPage();