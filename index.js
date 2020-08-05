//handles click of "checked off" button to strikethrough item
$(".shopping-list").on("click", ".shopping-item-toggle span", function() {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});

//handles click of "delete" button to delete selected list item
$(".shopping-list").on("click", ".shopping-item-delete", function() {
    $(this).parent().parent().remove();
});

//creates styling for buttons separate from added list item
let buttons = "<div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span>\
</button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div>";

//sets item as empty string variable
let item=""

//adds item to list with aleart to enter something in input if left blank
$("#js-shopping-list-form").submit(function(event) {
    item = $("#shopping-list-entry").val();
    event.preventDefault();
    $("#js-shopping-list-form").find('input:text').val('');
    if (item != "") {
        $(".shopping-list").append("<li>" + "<span class = 'shopping-item'>" + item + "</span>" + buttons + "</li>");
    } else {
        alert("Must enter an item name!");
    }
    
});