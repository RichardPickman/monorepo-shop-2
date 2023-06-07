Feature('My First Test');

Scenario('Test homepage', ({ I }) => {
    I.amOnPage('/');
    I.click('MASS DELETE');
    I.click('ADD');
});

Scenario('Test product page', ({ I }) => {
    I.amOnPage('/');
    I.click('ADD');
    I.seeElement('#product_form');
    I.seeElement('#sku');
    I.seeElement('#name');
    I.seeElement('#price');
    I.seeElement('#productType');
});

Scenario('Add disc', ({ I }) => {
    I.amOnPage('/');
    I.click('ADD');
    I.seeElement('#product_form');
    I.fillField('#sku', 'SKUTest000');
    I.fillField('#name', 'NameTest000');
    I.fillField('#price', '25');
    I.waitForElement('#productType');
    I.selectOption('#productType', 'DVD');
    I.waitForElement('#size');
    I.fillField('#size', '200');
    I.click('Save');
});

Scenario('Add a book', ({ I }) => {
    I.amOnPage('/');
    I.click('ADD');
    I.seeElement('#product_form');
    I.fillField('#sku', 'SKUTest001');
    I.fillField('#name', 'NameTest001');
    I.fillField('#price', '25');
    I.waitForElement('#productType');
    I.selectOption('#productType', 'Book');
    I.waitForElement('#weight');
    I.fillField('#weight', '200');
    I.click('Save');
});

Scenario('Add a furniture', ({ I }) => {
    I.amOnPage('/');
    I.click('ADD');
    I.seeElement('#product_form');
    I.fillField('#sku', 'SKUTest002');
    I.fillField('#name', 'NameTest002');
    I.fillField('#price', '25');
    I.waitForElement('#productType');
    I.selectOption('#productType', 'Furniture');
    I.waitForElement('#height');
    I.waitForElement('#width');
    I.waitForElement('#length');
    I.fillField('#height', '200');
    I.fillField('#width', '200');
    I.fillField('#length', '200');
    I.click('Save');
});

Scenario('Check for Book product', ({ I }) => {
    I.amOnPage('/');
    I.waitForText('NameTest000');
});

Scenario('Check for Disc product', ({ I }) => {
    I.amOnPage('/');
    I.waitForText('NameTest001');
});

Scenario('Check for Furniture product', ({ I }) => {
    I.amOnPage('/');
    I.waitForText('NameTest002');
});

Scenario('Check all the Products checkboxes and delete products', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.delete-checkbox');
    I.executeScript(function () {
        checkboxes = document.getElementsByClassName('delete-checkbox');
        for (i = 0; i < checkboxes.length; i++) {
            checkboxes[i].click(); //This line as I mentioned will initiate an onClick event of a tag, since checkbox is an Input tag and has a either onChange and onClick event handler.
        }
    });

    I.click("MASS DELETE");
});

Scenario('Check deleted products', ({ I }) => {
    I.amOnPage('/');
    I.waitForInvisible('.delete-checkbox');
});

Scenario('Add a furnioture with invalid inputs', ({ I }) => {
    I.amOnPage('/');
    I.click('ADD');
    I.seeElement('#product_form');
    I.fillField('#sku', 'InvalidInput');
    I.fillField('#name', 'InvalidName22');
    I.fillField('#price', 'E');
    I.selectOption('#productType', 'Book');
    I.fillField('#weight', 'E');
    I.click('Save');
});

Scenario('Check for invalid inputs', ({ I }) => {
    I.amOnPage('/');
    I.dontSeeElement("Invalid_Input");
});
