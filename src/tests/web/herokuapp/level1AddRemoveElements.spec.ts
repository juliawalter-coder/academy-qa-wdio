import AddRemoveElementsPage from '../../../pages/web/herokuapp/AddRemoveElementsPage';

describe('Level 1 - Button click scenario', () => {

  it('ACT001 - Clicking add element button should add another delete button', async () => {;
    await AddRemoveElementsPage.navigate();
    await expect(AddRemoveElementsPage.deleteElement).not.toBeDisplayed();
    await AddRemoveElementsPage.ClickAddElementButton();
    await expect(AddRemoveElementsPage.deleteElement).toHaveText('Delete');
    await expect(AddRemoveElementsPage.deleteElement).toBeDisplayed();
  })
})