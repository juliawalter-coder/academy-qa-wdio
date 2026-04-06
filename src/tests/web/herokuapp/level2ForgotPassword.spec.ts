import ForgotPasswordPage from '../../../pages/web/herokuapp/ForgotPasswordPage';

describe('Level 1 - Button click scenario', () => {

  beforeEach( '', async () => {
    await browser.maximizeWindow();
    await ForgotPasswordPage.navigate();
  })

  it('ACT002 - Retrieve password - Internal server error window', async () => {
    //await browser.url('forgot_password');
    const emailInput = await $('#email');
    const retrievePasswordButton = await $('#form_submit');

    await emailInput.setValue('teste@test.com');
    await retrievePasswordButton.click();

    const InternalServerErrorWindow = $('body > h1');
    //Internal server error window
    await expect(InternalServerErrorWindow).toHaveText('Internal Server Error')
    // expect(isDisplayedDeleteElement).to.equal(true);
    //await expect(deleteElement).toHaveText('Delete');
    //Access page
    //Identify the button - click on button
    //Identify the delete button on the screen

    //await fistnama.setValue();
    //await browser.pause();
  })
})