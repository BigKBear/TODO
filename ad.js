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
    var task = document.getElementById("get-entered-text").value;
    
    var rowitem = document.createElement("li");
    rowitem.appendChild(document.createTextNode(task));
    document.getElementById("dunamicaly-added-items").appendChild(rowitem);
    
    //$("#dunamicaly-added-items").append("<li> <input type='checkbox'>"+task+" <button type='button'> Edit </button><button type='button'> Delete </button> </input></li><br>")
    
}


/*
 View
 */

/*
 Templater
 */