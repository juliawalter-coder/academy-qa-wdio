import CheckBoxesPage from '../../../pages/web/herokuapp/CheckBoxesPage';

describe('Level 1 - Button click scenario', () => {

  it('ACT004 -CheckBox selection ', async () => {
    await CheckBoxesPage.navigate();
    expect(CheckBoxesPage.checkBoxValue1 && CheckBoxesPage.checkBoxValue2).toBeEnabled();
    expect(CheckBoxesPage.checkBoxValue2).toBeSelected();
    !expect(CheckBoxesPage.checkBoxValue1).not.toBeSelected();
    await CheckBoxesPage.checkBoxValue1Click();
    await CheckBoxesPage.checkBoxValue2Click();
    expect(CheckBoxesPage.checkBoxValue1).toBeSelected();
    !expect(CheckBoxesPage.checkBoxValue2).not.toBeSelected();
  })
})