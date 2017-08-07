//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
    var value = {
        "name": name,
        "message": message
    }

    database.push(value);
}

database.on('child_added', function(rowData) {
    var row = rowData.val();
    var name = row.name
    var message = row.message
    $('.allMessages').append("<p>" + name + ": " + message + "</p>");
})