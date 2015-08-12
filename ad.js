/*
 model
 */
var list_item = { name:" ", selected:false};

/*
 controler
 */
function add_to_list()
{
    //var task = $("#get_entered_text").val();
    var task = document.getElementById("get_entered_text").value;
    
    $("#dunamicaly_added_items").append("<div>"+task+" <button type='button'> Edit </button><button type='button'> Delete </button> </div><br>")
    
    $("#get_entered_text").val("");
}


/*
 View
 */

/*
 Templater
 */