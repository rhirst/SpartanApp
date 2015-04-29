var menus = [[['Shaw Hall Breakfast: 7-11 am', 'Bread Box', 'Scrambled Eggs', 'Bacon', 'Hash Browns', 'Pancakes', 'Grits'],['Shaw Hall Lunch: 11am-2pm','Main Street', 'Carved Sirloin Roast', 'Seasoned Sour Cream', 'Mashed Potatos', 'Buffalo Chicken Melt'],['Shaw Hall Dinner: 5-8pm', 'Garden Wok', 'Baked Artichokes', 'Whole Wheat Penne', 'Italian Breadsticks', 'Pot Stickers'],['Shaw Hall Late Night Not Available', '']],
					[['Case Hall Breakfast: 7-10 am', 'Great Lakes Plate', 'Scrambled Eggs', 'Omelets to Order', 'Baked Oatmeal', 'Cheddar Sausage'],['Case Hall Lunch: 11-2pm', 'Ciao!', 'Pepperoni Pizza', 'Cheese Pizza', 'Quatro Formaggio Pizza', 'Specailty Sandwhiches'],['Case Hall Dinner 5-8pm', 'Brimstone Grille', 'Grilled Chicken', 'Chicken Patty Sandwhich', 'Golden French Fries'], ['Case Hall Late Night Not Available', '']],
					[['Brody Hall Breakfast: 7-9 am', 'Pangea', 'Egg, Bacon, Cheese Biscuit', 'Cream of Wheat', 'Swiss Potatos'], ['Brody Hall Lunch: 11am-2pm','Pangea', 'Chipotle Lime Chicken', 'Salad', 'Hunan Rice', 'Fire Roasted Marinara'], ['Brody Hall Dinner 5-8pm', 'Boiling Point', 'Grilled Chicken Breast', 'Italian Sausage', 'Vegetable Pasta Bar', 'Fire Roasted Marinara', 'Alfredo Sauce', 'Breadsticks'],['Brody Hall Late Night 9-12pm', 'Ciao', 'Pepperoni Pizza', 'Cheese Pizza' , 'Wraps']],
					[['The Gallery Breakfast: 7-10', 'Bliss', 'Continental Breakfast', 'Made to Order Waffles'], ['The Gallery Lunch', 'Brimstone Grill', 'Hamburgers', 'Cheeseburgers', 'Buffalo Chicken', 'Fried Fish'], ['The Gallery Dinner 5-8pm', 'Latitudes', 'Salmon Vesuvio', 'Beurre Blanc', 'Wild Rice', 'Asparagus'],['The Gallery Late Night 8-10pm', 'Ciao', 'Made to Order Pizza', 'Pepperoni Pizza', 'Cheese Pizza', 'Deli Bar']]]

function display_menu() {
    var dining_hall = document.getElementById("dining_hall");
    
    var meal_time = document.getElementById("meal_time");
    
    var text = "";
    var new_menu = "";
    var i;
    for (i=2; i < menus[dining_hall.value][meal_time.value].length; i++){
    	text += '<li>' + menus[dining_hall.value][meal_time.value][i] +'</li>'
    }
    document.getElementById("hall_name").innerHTML = menus[dining_hall.value][meal_time.value][0]
    document.getElementById("station_name").innerHTML = menus[dining_hall.value][meal_time.value][1]
    document.getElementById("food").innerHTML = text;
}

