var Users = [];
var i = 0;
var table = document.getElementById("table");

function add() {
    var user = {};
    user.name = prompt("Enter the user's name:");
    user.email = prompt("Enter the user's email:");
    user.phone = prompt("Enter the user's phone number:");
    user.address = prompt("Enter the user's address:");

    if (user.name && user.email && user.phone && user.address) {
        Users.push(user);
        print(user);
    } else {
        alert("Fields cannot be blank.");
    }
}

function edit(x) {
    var user = Users[x];
    user.name = prompt("Enter the modified name:", user.name);
    user.email = prompt("Enter the modified email:", user.email);
    user.phone = prompt("Enter the modified phone:", user.phone);
    user.address = prompt("Enter the modified address:", user.address);
    Users[x] = user;
    updateTable();
}

function print(user) {
    var tr = document.createElement('tr');
    tr.setAttribute("id", i);
    i++;

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('div');

    var btn1 = document.createElement('a');
    btn1.setAttribute("onclick", "edit(" + (i - 1) + ")");
    btn1.setAttribute("class", "btn btn-primary");
    btn1.innerText = "Edit";

    var btn2 = document.createElement('a');
    btn2.setAttribute("onclick", "remove(" + (i - 1) + ")");
    btn2.setAttribute("class", "btn btn-primary");
    btn2.innerText = "Remove";

    td1.innerText = user.name;
    td2.innerText = user.email;
    td3.innerText = user.phone;
    td4.innerText = user.address;

    td5.append(btn1);
    td5.append(btn2);

    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);

    table.appendChild(tr);
}

function updateTable() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    Users.forEach(function(user, index) {
        print(user, index);
    });
}

function remove(x) {
    Users.splice(x, 1);
    updateTable();
}

// Initial table update
updateTable();