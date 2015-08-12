/*
 model
 */
var list_item = { name:" ", selected:false};

/*
 controler
 */
function add_to_list()
{
    var task = document.getElementById("get-entered-text").value;
    
    var rowitem = document.createElement("li");
    rowitem.appendChild(document.createTextNode(task));
    document.getElementById("dunamicaly-added-items").appendChild(rowitem);
    
    
}


/*
 View
 */

/*
 Templater
 */