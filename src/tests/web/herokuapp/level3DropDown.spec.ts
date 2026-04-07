import DropDownPage from '../../../pages/web/herokuapp/DropDownPage';

describe('Level 3 - Open dropdown', () => {

  it('ACT003 - Dropdown selection validation', async () => {
    await DropDownPage.navigate();
    await DropDownPage.dropDownFieldClick();
    const count = await DropDownPage.dropDownFieldOptions.length;
    let number = DropDownPage.getRandomInt(1, count).toString();
    await DropDownPage.selectDropDownOptionByAttribute('value', number);
    await expect(DropDownPage.dropDownField).toHaveValue(number);

  })
})