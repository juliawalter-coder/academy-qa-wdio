import EntryAdPage from '../../../pages/web/herokuapp/EntryAdPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await EntryAdPage.navigate();
  })

  it('ACT004 - Implicit wait ', async () => {

    await EntryAdPage.WaitModalWindowToBeDisplayedAndClose();
    expect(EntryAdPage.modalWindow).not.toBeDisplayed();

  })
})