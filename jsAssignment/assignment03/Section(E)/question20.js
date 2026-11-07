// Question 20 — Mini Shopping Cart 
var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];
var prices = [2500, 1200, 22000, 800, 3500];

var catalog = "";
for (var i = 0; i < products.length; i++) {
    catalog += (i + 1) + ". " + products[i] + " - Rs. " + prices[i] + "\n";
}

var productInput = +prompt(catalog + "\nEnter the Product Number (1-5):");
var productNumber = productInput;

var quantityInput = +prompt("Enter the Quantity:");
var quantity = quantityInput;

if (productNumber ===0 || productNumber < 1 || productNumber > products.length) {
    console.log("Error: Invalid product number! Please choose a number between 1 and 5.");
} else if ( quantity <= 0) {
    console.log("Error: Invalid quantity! Please enter a valid number greater than 0.");
} else {
    var index = productNumber - 1;
    var productName = products[index];
    var unitPrice = prices[index];

    var subtotal = unitPrice * quantity;
    var discount = 0;

    if (subtotal >= 5000) {
        discount = subtotal * 0.10;
    }

    var finalBill = subtotal - discount;

    var totalAmount = "FINAL BILL\n" 
    +"Product: " + productName + "\n" 
    +"Unit Price: Rs. " + unitPrice + "\n" 
    +"Quantity: " + quantity + "\n"
    +"Subtotal: Rs. " + subtotal + "\n" 
    +"Discount: Rs. " + discount + "\n" 
    +"Final Bill: Rs. " + finalBill;

    console.log(totalAmount);
}