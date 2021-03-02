pizza_array = ["Achari Do Pyaaza",
               "Creamy Tomato Pasta Pizza",
               "The Unthinkable Pizza",
               "Margherita",
               "Farmhouse",
               "Peppy Paneer",
               "Veg Extravaganaza",
               "Veggie Paradise",
               "Cheese n Corn",
               "Double Cheese Margherita"];
var showdiv = 1;
function givingmenu(){
    var htmlinformation;
    htmlinformation = "<ol class = 'listmenu'>";
    pizza_array.sort();
    for (var i = 0;i < pizza_array.length;i++) {
        htmlinformation = htmlinformation + '<li>' + pizza_array[i] + '</li>'; 
    }
    htmlinformation = htmlinformation + '</ol>';
    if (showdiv == 1){
        document.getElementById("showmenudiv2").innerHTML = htmlinformation;
        showdiv = 2;
    } 
    else {
        document.getElementById("showmenudiv2").innerHTML = "";
        showdiv = 1;
    }
}
function add_item(){
    var item=document.getElementById("add_item").value;
    pizza_array.push(item);
    pizza_array.sort();
    htmlinformation = '<section class="cards">'
    for (i = 0;i < pizza_array.length;i++) {
        htmlinformation = htmlinformation + '<div class="card">' + '<img src="images/pizzaImg.png"/>' + pizza_array[i] + '</div>';
        htmlinformation = htmlinformation + '</section>';
        document.getElementById("display_addedmenu").innerHTML = htmlinformation;
    }
}
