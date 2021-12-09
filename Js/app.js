// Total price update
function totalPriceUpdate(extraPrice) {
    const previousPrice = document.getElementById('total-price').innerText;
    const newPrice = Number(previousPrice) + Number(extraPrice);

    document.getElementById('total-price').innerText = String(newPrice);

    finalPriceUpdate(document.getElementById('total-price').innerText);
}


// Update final price
function finalPriceUpdate(price) {
    document.getElementById('final-price').innerText = price;
}

let promoApplied = false;
//  discount price update
document.getElementById('apply-btn').addEventListener('click', function () {
    // get promo input
    const promoInput = document.getElementById('promo-input').value;
    console.log(promoInput);
    // checking promo input is coorrect not not
    if (promoInput == 'stevekaku' && promoApplied == false) {
        const basePrice = document.getElementById('final-price').innerText;
        const discountPercentage = 20 * Number(basePrice) / 100;
        const discountPrice = Number(basePrice) - discountPercentage;

        document.getElementById('final-price').innerText = String(discountPrice);
        promoApplied = true;
    }
    document.getElementById('promo-input').value = '';
})



// Common memory cost update function 
function costUpdate(id) {
    if (id == '8gb-btn') {
        document.getElementById('memory-cost').innerText = '0';
        totalPriceUpdate('0');
        // finalPriceUpdate('0');
    }
    else if (id == '16gb-btn' && click16gb == 1) {
        document.getElementById('memory-cost').innerText = '180';
        totalPriceUpdate('180');
        // finalPriceUpdate('100');
    }
    else if (id == '256gb-btn') {
        document.getElementById('storage-cost').innerText = '0';
        totalPriceUpdate('0');
        // finalPriceUpdate('0');
    }
    else if (id == '512gb-btn' && click512gb == 1) {
        document.getElementById('storage-cost').innerText = '100';
        totalPriceUpdate('100');
        // finalPriceUpdate('100');
    }
    else if (id == '1tb-btn' && click1tb == 1) {
        document.getElementById('storage-cost').innerText = '180';
        totalPriceUpdate('180');
        // finalPriceUpdate('180');
    }
    else if (id == 'free') {
        document.getElementById('delivery-cost').innerText = '0';
        totalPriceUpdate('0');
        // finalPriceUpdate('0');
    }
    else if (id == 'paid' && clickPaid == 1) {
        document.getElementById('delivery-cost').innerText = '20';
        totalPriceUpdate('20');
        // finalPriceUpdate('20');
    }
    else {
        console.log('do nothing');
    }
}


let click8gb = 0;
document.getElementById('8gb-btn').addEventListener('click', function () {
    click8gb++;
    // checking whether 16gb is cklicked or not; if clicked reduce price accordingly
    if (click16gb > 0) {
        totalPriceUpdate('-180');
        // finalPriceUpdate('-100');
        click16gb = 0;
    }
    costUpdate('8gb-btn');
})

let click16gb = 0;
document.getElementById('16gb-btn').addEventListener('click', function () {
    click16gb++;
    costUpdate('16gb-btn');
})


let click256gb = 0;
// 256GB storage buttopon click 
document.getElementById('256gb-btn').addEventListener('click', function () {
    click256gb++;
    if (click512gb > 0) {
        totalPriceUpdate('-100');
        // finalPriceUpdate('-100');
        click512gb = 0;
    }
    else if (click1tb > 0) {
        totalPriceUpdate('-180');
        // finalPriceUpdate('-180');
        click1tb = 0;
    }
    costUpdate('256gb-btn');
})


let click512gb = 0;
// 512GB storage buttopon click 
document.getElementById('512gb-btn').addEventListener('click', function () {
    click512gb++;
    if (click1tb > 0) {
        totalPriceUpdate('-180');
        // finalPriceUpdate('-180');
        click1tb = 0;
    }
    costUpdate('512gb-btn');
})

let click1tb = 0;
// 1TB storage buttopon click 
document.getElementById('1tb-btn').addEventListener('click', function () {
    click1tb++;
    if (click512gb > 0) {
        totalPriceUpdate('-100');
        // finalPriceUpdate('-100');
        click512gb = 0;
    }
    costUpdate('1tb-btn');
})

let clickFree = 0;;
// Free delivery buttopon click 
document.getElementById('free').addEventListener('click', function () {
    clickFree++;
    if (clickPaid > 0) {
        totalPriceUpdate('-20');
        // finalPriceUpdate('-20');
        clickPaid = 0;
    }
    costUpdate('free');
})

let clickPaid = 0;
// Paid delivery buttopon click 
document.getElementById('paid').addEventListener('click', function () {
    clickPaid++;
    costUpdate('paid');
})

