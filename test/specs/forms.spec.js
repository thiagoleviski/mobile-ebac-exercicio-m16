const forms = require("../screens/forms.screen");

describe('Access forms page', () => {
    it('should appear the forms page', async () => {
        await forms.goToFormsPage()        
    });
});

describe('Inserting informations', () => {
    it('should insert informations on the forms page', async () => {
        await forms.insertInfos()       
    });
});