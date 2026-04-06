import AddRemoveElementsPage from '../../../pages/web/herokuapp/AddRemoveElementsPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await AddRemoveElementsPage.navigate();
    await browser.maximizeWindow();
  })

  it('ACT001 - Clicking add element button should add another delete button', async () => {;

    //await browser.url('add_remove_elements/');
    const addElement = await $('#content > div > button');
    const deleteElement = await $('button[class="added-manually"]');
    await expect(deleteElement).not.toBeDisplayed();
    //let isDisplayedDeleteElement = await deleteElement.isDisplayed();
    //expect(isDisplayedDeleteElement).toEqual(false);
    await addElement.click();

    // expect(isDisplayedDeleteElement).to.equal(true);
    await expect(deleteElement).toHaveText('Delete');
    await expect(deleteElement).toBeDisplayed();
    //Access page
    //Identify the button - click on button
    //Identify the delete button on the screen

    //await fistnama.setValue();
    //await browser.pause(500); Ponemos solo para
  })
})