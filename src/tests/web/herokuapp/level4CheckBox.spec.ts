import CheckBoxesPage from '../../../pages/web/herokuapp/CheckBoxesPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await CheckBoxesPage.navigate();
  })

  it('ACT004 -CheckBox selection ', async () => {
    expect(CheckBoxesPage.checkBoxValue2).toBeSelected();
    !expect(CheckBoxesPage.checkBoxValue1).not.toBeSelected();
    await CheckBoxesPage.checkBoxValue1Click();
    await CheckBoxesPage.checkBoxValue2Click();
    expect(CheckBoxesPage.checkBoxValue1).toBeSelected();
    !expect(CheckBoxesPage.checkBoxValue2).not.toBeSelected();
  })
})