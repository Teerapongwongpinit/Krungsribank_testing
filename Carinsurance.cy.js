const Carinsurance = require('../fixtures/Krungsri.json')
const functions = require('../support/function')

describe('Test Filter Car in insurance page', () => {
    it('Filter Car Type until Insurance Type', () => {
        functions.FilterCarTypeUntilInsuranceType()
    });
    it('Validate back button for insurance page', () => {
        functions.ValidatebackbuttonforFilterCarTypeUntilInsuranceType()
    });
    it('Test Filter Car in insurance page and edit', () => {
        functions.FilterCarTypeUntilInsuranceTypeandedit()
    });
    it('Validate content for insurance page', () => {
        functions.Validatecontent()
    });
});
