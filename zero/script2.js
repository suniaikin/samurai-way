// Offer me your price!

let productPrice = 100

document.write('Result', ':', '  ');

const customerPrice = prompt('How much doest the product?');

if (productPrice > customerPrice) {
	document.write('I cannot sell it for the requested price :(');
} else {
	document.write('The product is yours!');
}
