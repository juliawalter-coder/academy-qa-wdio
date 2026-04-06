import AddRemoveElementsPage from '../../../pages/web/herokuapp/AddRemoveElementsPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await AddRemoveElementsPage.navigate();
    await browser.maximizeWindow();
  })

  it('ACT001 - Clicking add element button should add another delete button', async () => {;

    await expect(AddRemoveElementsPage.deleteElement).not.toBeDisplayed();
    await AddRemoveElementsPage.ClickAddElementButton();
    await expect(AddRemoveElementsPage.deleteElement).toHaveText('Delete');
    await expect(AddRemoveElementsPage.deleteElement).toBeDisplayed();

    //Access page
    //Identify the button - click on button
    //Identify the delete button on the screen
    //await fistnama.setValue();
    //await browser.pause(500);
  })
})