
//declare global variables

// var for DOM div that will be filled with product information
var divItems = document.getElementById("listItems");
// var for future concat string that will hold information
var pageItems = "";
// var to store parsed product information
var products;
// var to store parsed sales information
var salesData;

//function that will parse product info and department to the page
var productsCat = function () {
	pageItems = "";
	for (var i = 0; < products.length; i++) {
		//assigns department
		if (products[i].category_id === 1) {
			products[i].category = "Apparel";
	}	else if (products[i].category_id === 2) {
			products[i].category = "Furniture";
	}	else if ((products[i].category_id === 3) {
			products[i].category = "Household";
	}

//assign product name, department, and price to the div
	pageItems += `<h3>${products[i].name}</h3>
					<p>In the ${products[i].category} department</p>
					<p class="${products[i].category_id}">Price is: <span class="price">${products[i].price}</span></p>`;
	//post
	divItems.innerHTML = pageItems;
}
