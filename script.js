let n = 1;
let price = 0;
const foodPrice = [60, 50, 20, 25];

document.getElementById('addFood').addEventListener('click', function() {
    var container = document.querySelector('.container');
	
    var foodItemHTML =`
        <div class="food-item">
            <form>
                <label for="foodChoice${n}"><p>Extra Choice ${n}</p></label>
                <select class="food" id="foodChoice${n}">
                    <option value="burger">Burger</option>
                    <option value="fries">Fries</option>
                    <option value="fishbol">Fishbol</option>
                    <option value="kikiam">Kikiam</option>
                </select>
                <label for="foodQty${n}"><p>Quantity</p></label>
                <input type="number" class="food" id="foodQty${n}" min="0">
            </form>
        </div
		`
    ;
	
	
    container.insertAdjacentHTML('beforeend', foodItemHTML);

    var newFoodItem = container.lastElementChild;
    newFoodItem.classList.add('food-item');
	
	n = n + 1;
})

document.getElementById('finalizeOrder').addEventListener('click', function() {
	for (let i = 0; i < n; i++) {
		const foodChoice = "foodChoice" + i;
		const foodQty = "foodQty" + i;
		const foodIndex = document.getElementById(foodChoice).options.selectedIndex;
		const foodAmt = document.getElementById(foodQty).value;
		price = price + (foodPrice[foodIndex] * foodAmt);
	}
	
	alert('Order finished. The price is ' + price);
})

document.getElementById('pay').addEventListener('click', function() {
	const cashAmount = document.getElementById('cashAmount').value;
	const change = cashAmount - price;
	
	alert('Thanks for your order. Total change: ' + change);
})