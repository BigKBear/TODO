window.onload = function ()
{
    $("#addToList").click(addTask);
}

var addTask = function()
{
    var task = $("#get_entered_text").val();
    
    $("#dunamicaly_added_items").append("<div>"+task+" <button type='button'> Edit </button><button type='button'> Delete </button> </div><br>")
    
    $("#get_entered_text").val("");
}


/*
 model
 */

/*
 controler
 */

/*
 View
 */

/*
 Templater
 */