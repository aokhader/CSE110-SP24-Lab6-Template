describe('Tests for the Notes App', () => {
    // // First, visit the lab 8 website
    beforeAll(async () => {
        await page.goto("http://127.0.0.1:5500/index.html")
    });

    it('Making sure notes are being made', async() => {
        console.log('Checking notes are added...');

        const button = await page.$('button');
        await button.click();
        const notes = await page.$$('.note');
        expect(notes.length).toBe(1);
    });

    it('Making sure notes can be removed after addition', async() => {
        console.log('Checking notes are added...');

        const button = await page.$('button');
        await button.click();
        const notes = await page.$$('.note');
        expect(notes.length).toBe(2);

        console.log('Checking notes are removed...');

        const firstNote = await page.$('textarea');
        await firstNote.click({clickCount:2});
        const newNotes = await page.$$('.note');
        expect(newNotes.length).toBe(1);

    });

    it('Making sure we can add text to note', async() => {
        console.log("Adding text to note...");
        const firstNote = await page.$('textarea');
        await firstNote.click();
        await firstNote.type('Hello World', {delay: 90});
    });

    it('Making sure the notes stay after reload', async() => {
        await page.reload();
        const notes = await page.$$('.note');
        expect(notes.length).toBe(1);
    });

    it('Making sure the add notes button changes text when hovering', async() => {
        const button = await page.$('button');
        await button.hover();
        const innerText = await button.evaluate(button => button.innerText);
        expect(innerText).toBe("+");
    });

    
});  