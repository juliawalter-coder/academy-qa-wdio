import { WebBasePage } from './WebBasePage';

class EntryAdPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('entry_ad');
  }

  get modalWindow() {
    return $('#modal');
  }

  get CloseModalWindow() {
    return $('div[class="modal-footer"]');
  }

  async WaitModalWindowToBeDisplayedAndClose() {
    await this.modalWindow.waitForDisplayed();
    await this.CloseModalWindow.waitForClickable();
    await this.CloseModalWindow.click();
  }
}

export default new EntryAdPage();