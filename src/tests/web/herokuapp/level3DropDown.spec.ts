import DropDownPage from '../../../pages/web/herokuapp/DropDownPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await DropDownPage.navigate();
  })

  it('ACT003 - Dropdown selection vaidation', async () => {
    //await browser.url('dropdown');
    const dropDownField = await $('#dropdown');


    //await emailInput.setValue('teste@test.com');
    await dropDownField.click();
    //await browser.ocrClickOnText({ text: 'Option 1' });

    //Internal server error window
    //await expect().toHaveText('Internal Server Error')
    // expect(isDisplayedDeleteElement).to.equal(true);
    //await expect(deleteElement).toHaveText('Delete');
    //Access page
    //Identify the button - click on button
    //Identify the delete button on the screen

    //await fistnama.setValue();
    //await browser.pause();
  })
})