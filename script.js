function onesDigit(n) {
	n = String(n);
	n = n.trim();
	let size = n.length;
	return Number(n[size-1]);
}

// Do not change the code below

// const n = prompt("Enter Number:");
alert(onesDigit(n));
