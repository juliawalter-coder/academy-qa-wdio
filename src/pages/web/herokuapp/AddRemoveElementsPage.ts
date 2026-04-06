import { WebBasePage } from './WebBasePage';

class AddRemoveElementsPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('add_remove_elements/');
  }

  get addElementButton(){
    return $('#content > div > button');
  }

  get deleteElement() {
    return $('button[class="added-manually"]');
  }

  async ClickAddElementButton(){
    await this.addElementButton.click();
  }

}

export default new AddRemoveElementsPage();