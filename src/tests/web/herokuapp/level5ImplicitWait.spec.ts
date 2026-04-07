import EntryAdPage from '../../../pages/web/herokuapp/EntryAdPage';

describe('Level 5 - Implicit wait', () => {

  it('ACT004 - Implicit wait ', async () => {
    await EntryAdPage.navigate();
    await EntryAdPage.WaitModalWindowToBeDisplayedAndClose();
    expect(EntryAdPage.modalWindow).not.toBeDisplayed();
  })
})