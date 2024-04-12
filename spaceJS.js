function enter(){
	localStorage.clear();
	let savedname = document.getElementById("item").value;
	localStorage.setItem('name', savedname);
	document.getElementById("printname").innerHTML = "Explorer: " + localStorage.getItem('name');
}