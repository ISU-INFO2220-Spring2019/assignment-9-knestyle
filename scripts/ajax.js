//Function to check the tags of each book.
function checkTags(obj, input) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].indexOf(input) > -1) {
            return true;
        }
    }
    return false;
}

//Function that goes through the data and compiles a list of results that are then added to the table.
function getAllResults(obj, input) {
    var results = new Array();
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].title.indexOf(input) > -1) {
            results.push(obj[i]);
        }
        else if (obj[i].ISBN.indexOf(input) > -1) {
            results.push(obj[i]);
        }
        else if (obj[i].author.firstName.indexOf(input) > -1 || obj[i].author.lastName.indexOf(input) > -1 || obj[i].author.middleName.indexOf(input) > -1) {
            results.push(obj[i]);
        }
        else if (checkTags(obj.tags, input)) {
            results.push(obj[i]);
        }
    }
    return results;
}

//Get the author's full name from the object passed in.
function authorName(obj) {
    var output = obj.lastName + ", " + obj.firstName + " " + obj.middleName;
    return output;
}

//Grabs and concatenates all tags from each book.
function generateTags(obj) {
    var output = "";
    for (var i = 0; i < obj.length; i++) {
        output += obj[i] + ", ";
    }
    return output;
}

//Function that fills the table with values from the JSON page.
function populateBooks() {
    //Get out what was entered in the input.
    var search = document.getElementById("txtSearch").value;

    $.ajax({
        url: "data/books.json",
        success: function (data) {
            var table = document.getElementById("tblBooks");
            var results = new Array();
            results = getAllResults(data.books, search);
            for (var i = 0; i < results.length; i++) {
                //Create the row.
                var row = document.createElement("tr");
                //Create the cells, add the text based off of the JSON file.
                var title = document.createElement("td");
                title.innerText = results[i].title;
                var isbn = document.createElement("td");
                isbn.innerText = results[i].ISBN;
                var author = document.createElement("td");
                author.innerText = authorName(results[i].author);
                var tags = document.createElement("td");
                tags.innerText = generateTags(results[i].tags);
                //Append the cells to the row.
                row.appendChild(title);
                row.appendChild(isbn);
                row.appendChild(author);
                row.appendChild(tags);
                //Make every other row a different color to help with appearance.
                if (i % 2 == 1) {
                    row.className = "other";
                }
                //Append the row to the table.
                table.appendChild(row);
            }
        },
        //Did not find the file, or could not load it.
        error: function () {
            alert("Error. The file named 'books.json' was not found.");
        }
    });
}



window.onload = loader;
//Function that sets the click events of controls on the HTML page.
function loader() {
    //Set button click event on load.
    var button = document.getElementById("btnSearch");
    button.onclick = populateBooks;
}