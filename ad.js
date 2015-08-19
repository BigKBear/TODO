
/*
Best Pratices
 - Model-View* Separation
 - DRY programming (do not repeat yourself)
 - Dont hack (find a way to stick to th frame work)

Dont write bad code
 - Performance
 - Reusability
 - Square peg, round hole 
 
Test
 - Write the test!
 - TDD with a robust test suite

Broaden your understanding
 - Learning curve is steep!
 - Pratice being curious
 - Refactoring (teaches about cleaner code)

Read the source code!
 - Consumable
 - Error messages are bad!
 - Dissect the source


 
*/

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

 Person = function(name, age) {
 this.watch('age', Person.prototype._isValidAssignment);
 this.watch('name', Person.prototype._isValidAssignment);
 this.name = name;
 this.age = age;
 };
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


function changeMade(r)
{
    console.log(r.target.value);
//    console.log('Value in r which is pased to function checkbox is '+ r.target.checked + ' the list item name that the user entered is ' + r.target.value)
//    return r.target.value ;
}

var mimic = function(e) {
    listItem.name = e.target.value;

}

/*
 o.watch('p', function (id, oldval, newval) {
 console.log('o.' + id + ' changed from ' + oldval + ' to ' + newval);
 return newval;
 });
 
 o.p = 2;
 o.p = 3;
 delete o.p;
 o.p = 4;
 
 o.unwatch('p');
 o.p = 5;
 */



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

listItem.observe('name', changeMade);