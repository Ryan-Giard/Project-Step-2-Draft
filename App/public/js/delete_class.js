// sends request to backend to delete Class matching classID
function deleteClass(classID){
    const data = {
        id: classID
    };

    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/classes/delete", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {
            deleteClassRow(classID);
            deleteClassOption(classID);
        }
        else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.");
        }
    }

    xhttp.send(JSON.stringify(data));
}


// deletes the HTML row that corresponds to the class matching classID
function deleteClassRow(classID){
    let table = document.getElementById("class-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
        if (table.rows[i].getAttribute("class-id") == classID) {
            table.deleteRow(i);
            break;
        }
    }
}

// deletes the class from the dropdown menu in the update class form
function deleteClassOption(classID){
    let classSelect = document.getElementById("update-class-id");
    for (let i = 0; i < classSelect.length; i++){
        if (Number(classSelect.options[i].value) === Number(classID)){
            classSelect[i].remove();
            break;
        } 
    }
}