import { WebBasePage } from './WebBasePage';

class EntryAdPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('entry_ad');
  }
}

export default new EntryAdPage();