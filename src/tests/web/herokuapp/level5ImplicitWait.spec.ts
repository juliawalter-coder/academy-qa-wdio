import EntryAdPage from '../../../pages/web/herokuapp/EntryAdPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await EntryAdPage.navigate();
  })

  it('ACT004 - Implicit wait ', async () => {
    //await browser.url('entry_ad');
    const dropBoxValue1 = await $('input[text=" checkbox 1"]');
    const dropBoxValue2 = await $('input[text=" checkbox 2"]');

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