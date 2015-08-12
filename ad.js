/*
 Challange
 */

/*
 model
 */
    var listItem = { name:" ", selected:false};

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

    function Mimic()
    {
        var task = document.getElementById("get-entered-text").value;
        var task2 = document.getElementById("get-entered-text2").value = task;
                var task2 = document.getElementById("get-entered-text3").value = task;
                var task2 = document.getElementById("get-entered-text4").value = task;
    }



/*
 View
 */

/*
 Templater
 */