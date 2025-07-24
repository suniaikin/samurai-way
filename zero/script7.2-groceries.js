let shopList = [
	['milk', 'bread', 'eggs'],
	['juice', 'ice cream'],
	['pet food', 'shampoo']
]

for (let i = 0; i < shopList.length; i++) {
	let category = shopList[i];
	document.write('List #', i+1, '<br/>')
	document.write('-------', '<br/>')
	for (let j = 0; j < category.length; j++) {
		let item = category[j];
		document.write(j + 1, "-", item, '<br/>');
	}
	document.write('<br/>')
}