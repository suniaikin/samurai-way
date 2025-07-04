// Do you have enough funds to buy my 3 items?
// variant 2

let balance = 10000

document.write('Results', ':', '<br>', '<br>');
const customer0PriceString = Number(prompt('How much are you willing to pay?'));
const notNaN = customer0PriceString === customer0PriceString
if (notNaN) {
	if (customer0PriceString <= balance) {
		document.write('The 1st product is yours!');
		balance = balance - customer0PriceString
	} else {
		document.write('Unfortunately, I cannot sell it for the requested price');
	}
} else {
	document.write('You input incorrect number!');
}

document.write('<br>', '<br>', 'The rest balance: ', balance)


