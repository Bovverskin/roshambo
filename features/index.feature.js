const { Roshambo } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get Roshambo results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })

    it('clicking on the "rock" button', async () => {
        await browser.selectOption("select[id='value']", { option: rock})
        await browser.clickOnButton("input[value='rock']")
        let content = await browser.getContent("[id='result']")
        expect(content).to.eql('LOSER! The Computer choose paper');
    })

    it('clicking on the "paper" button', async () => {
        await browser.selectOption("select[id='value']", { option: paper})
        await browser.clickOnButton("input[value='paper']")
        let content = await browser.getContent("[id='result']")
        expect(content).to.eql('TIE! The Computer choose paper');
    })

    it('clicking on the "scissors" button', async () => {
        await browser.selectOption("select[id='value']", { option: scissors})
        await browser.clickOnButton("input[value='scissors']")
        let content = await browser.getContent("[id='result']")
        expect(content).to.eql('WINNER!! The Computer choose paper');
    })
})