menu = ["pizza margerita" ,
        "stuffed garlic bread" ,
        "farm house pizza" , 
        "leamonade" , 
        "coca-cola", 
        "white_sauce_pasta",
        "red_sauce_pasta",
        "American_veg_burger",
        "plain-cheese",
        "red_velvet_cake"];

function getmenu() {
    var html_data;
    html_data = "<ol class='menulist'>"
    menu.sort();
    for (var i=0; i<menu.length; i++) {
        html_data = html_data + '<li>' + menu[i];
    }
    html_data = html_data + "</ol>"
    document.getElementById ("display_menu").innerHTML = html_data;
}        

function add_item () {
    var html_data;
    var item=document.getElementById ("add_item").value;
    menu.push(item);
    menu.sory();
    html_data = "<section class='cards'>"
    for (var i=0; i<menu.length; i++) {
        html_data = html_data + "<div class='cards'>" + "<img src='pizzaImg.png'>" + menu[i] + "</div>"
}
html_data = html_data + "</section>"
document.getElementById ("display_addmenu").innerHTML = html_data;
}