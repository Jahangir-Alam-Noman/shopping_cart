function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '_number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    //  update  total
    const productTotal = document.getElementById(product + '_total');
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();

}


function getInputValue(product) {
    const productInput = document.getElementById(product + '_number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the html
    document.getElementById('sub_total').innerText = subTotal;
    document.getElementById('tax_amount').innerText = tax;
    document.getElementById('total_price').innerText = totalPrice;
}


// phone case increase decrease events
document.getElementById('phone_plus').addEventListener
    ('click', function () {
        updateProductNumber('phone', 1219, true);

    });
document.getElementById('phone_minus').addEventListener
    ('click', function () {
        updateProductNumber('phone', 1219, false);

    });



// handle case increse decrease events
document.getElementById('case_plus').addEventListener
    ('click', function () {
        updateProductNumber('case', 59, true);
    });

document.getElementById('case_minus').addEventListener
    ('click', function () {
        updateProductNumber('case', 59, false);

    });
