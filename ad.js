/*
 Challange
 */

/*
 if(el){
 el.addEventListener('click', swapper, false);
 }
 */
//document.getElementById("add-to-list").addEventListener("click", addToList);


/*
 model
 */
var listItem = { name:"", selected:false};

/*
 controler
 */
function addToList()
{
    var task = document.getElementById("get-entered-text").value;
    task.onchange
    var rowitem = document.createElement("li");
    rowitem.appendChild(document.createTextNode(task));
    
    document.getElementById("dunamicaly-added-items").appendChild(rowitem);
}


var mimic = function(e) {
    listItem.name = e.target.value;
}


/*
 View
 */

/*
 Templater
 */

var same = document.getElementsByClassName("same");

for(var i=0; i<same.length; i++){
    same[i].addEventListener("keyup", mimic);
}