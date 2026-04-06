import DropDownPage from '../../../pages/web/herokuapp/DropDownPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await DropDownPage.navigate();
  })

  it('ACT003 - Dropdown selection validation', async () => {
    const dropDownField = await $('#dropdown');
    await dropDownField.click();

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let number = getRandomInt(1, 2);

    await dropDownField.selectByAttribute('value', number.toString());
    await expect(dropDownField).toHaveValue(number.toString());
    await console.log(number);

    //await dropDownField.click();
    //await dropDownField.selectByAttribute('value', '2');
    //await expect(dropDownField).toHaveValue('2');

    //Select by attribute / by index or by visible texts
    // Math.random()

    //await dropDownFieldOption.click();

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