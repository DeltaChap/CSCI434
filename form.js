function calculateTotal() {
	var quantity = document.getElementById('quantity').value;
	var pricePerCandle = 5; // Change the price as needed
    var total = quantity * pricePerCandle;

    // Display the total
    document.getElementById('totalContainer').innerText = 'Total: $' + total;
}