function onesDigit(n) {
	let str = String(n);
	str = str.trim();
	let val = str.at(-1);
	val = Number(val);
	return val;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
