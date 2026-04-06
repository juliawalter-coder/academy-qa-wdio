import EntryAdPage from '../../../pages/web/herokuapp/EntryAdPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await EntryAdPage.navigate();
  })

  it('ACT004 - Implicit wait ', async () => {
    //await browser.url('entry_ad');
    const modalWindow = await $('#modal');
    const CloseModalWindow = await $('div[class="modal-footer"]');

    await modalWindow.waitForDisplayed();
    await CloseModalWindow.waitForClickable();
    await CloseModalWindow.click();

    expect(modalWindow).not.toBeDisplayed();
  })
})