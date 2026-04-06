import { WebBasePage } from './WebBasePage';

class AddRemoveElementsPage extends WebBasePage {

  public async navigate(): Promise<void> {
    await super.navigate('add_remove_elements/');
  }
}

export default new AddRemoveElementsPage();