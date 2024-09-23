function converter() {
	let f_degree = document.getElementById("fahrenheit");
	let c_degree = document.getElementById("celcius");
	c_degree.innerHTML = `${Math.round((f_degree.value - 32) / 1.8)}`;
}
