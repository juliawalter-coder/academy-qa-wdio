import DropDownPage from '../../../pages/web/herokuapp/DropDownPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await DropDownPage.navigate();
  })

  it('ACT003 - Dropdown selection validation', async () => {

    await DropDownPage.dropDownFieldClick();

    const count = await DropDownPage.dropDownFieldOptions.length;

    let number = DropDownPage.getRandomInt(1, count).toString();

    await DropDownPage.selectDropDownOptionByAttribute('value', number);

    await expect(DropDownPage.dropDownField).toHaveValue(number);

  })
})