function onesDigit(n) {
	let size = n.length;
	return Number(n.at(size-1));
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
