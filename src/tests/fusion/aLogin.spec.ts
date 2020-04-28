// Change to global config values
const fusionUrl = 'removed';
const loginUrl = 'removed';

// TODO: change to config
width = 1440;
height = 900;

describe('Login test for Fusion', async function () {

    let page;
    const usernameSelector = "#username";
    const passwordSelector = "#password";
    const loginSelector = "#kc-login";
    const errorSelector = ".kc-feedback-text";

    it('should not allow incorrect login', async function () {

        page = await browser.newPage();
        await page.setViewport({ width, height });
        await page.goto(fusionUrl);
        this.timeout(5000);
        const linkEmail = await page.$(usernameSelector);
        const linkPassword = await page.$(passwordSelector);
        const linkSubmit = await page.$(loginSelector);

        await linkEmail.click({ clickCount: 3 });
        await linkEmail.type('api_user');

        await linkPassword.click();
        await linkPassword.type('incorrectpassword');

        await linkSubmit.click();
        await page.waitFor(3000);

        expect(page.url()).to.have.string(loginUrl);

    });

    it('should show error message', async function () {
        
        const linkError = await page.$(errorSelector);
        expect(linkError).to.have.string('Invalid');

    });

});