//Your job is to build a web page that lists all of the products, the name of the department
//it's in, and the price. Additionally, put a <select> element at the top of the page that
//contains all possible values of the season_discount key in the categories file. As soon as
//ou select one of the seasons, all prices on the page should immediately be discounted by
//the corresponding percentage.

console.log("hello");

var requestProduct = new XMLHttpRequest()

function productInfo(e) {
    var product = JSON.parse(e.target.responseText);
    console.log("product", product);
}

requestProduct.addEventListener("load", "requestProduct")
requestProduct.open("GET", "products.json")
requestProduct.send()

var requestCategory = new XMLHttpRequest()

function requestCategory(e) {
    var product = JSON.parse(e.target.responseText);
    console.log("product", product);
}

requestCategory.addEventListener("load", "requestProduct")
requestCategory.open("GET", "categories.json")
requestCategory.send()
