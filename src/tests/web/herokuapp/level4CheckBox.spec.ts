import CheckBoxesPage from '../../../pages/web/herokuapp/CheckBoxesPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await CheckBoxesPage.navigate();
  })

  it('ACT004 -CheckBox selection ', async () => {
    //await browser.url('checkboxes');
    const dropBoxValue1 = await $('#checkboxes > input[type=checkbox]:nth-child(1)');
    const dropBoxValue2 = await $('#checkboxes > input[type=checkbox]:nth-child(3)');

    //Internal server error window
    //await expect().toHaveText('Internal Server Error')
    expect(dropBoxValue2).toBeSelected();
    !expect(dropBoxValue1).not.toBeSelected();

    await dropBoxValue1.click();
    await dropBoxValue2.click();

    expect(dropBoxValue1).toBeSelected();
    !expect(dropBoxValue2).not.toBeSelected();
    //await expect(deleteElement).toHaveText('Delete');
    //Access page
    //Identify the button - click on button
    //Identify the delete button on the screen

    //await fistnama.setValue();
    //await browser.pause();
  })
})