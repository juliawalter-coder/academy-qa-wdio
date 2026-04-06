import { WebBasePage } from './WebBasePage';

class DropDownPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('dropdown');
  }

  get dropDownField(){
    return $('#dropdown');
  }

  async dropDownFieldClick() {
    await this.dropDownField.click();
  }
}

export default new DropDownPage();