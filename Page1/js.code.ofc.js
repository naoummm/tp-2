var admin=[
    {
        username: "admin",
        password: "admin1234",
    },
];


function showpass() {
    var pass = document.getElementById('in4');
    if(pass.type=='text'){
        pass.type = 'password';
    }
    else 
      pass.type = 'text';
    
}
function login() {
    var Username = document.getElementById("in3").value;
     var Password = document.getElementById("in4").value;
     var span = document.getElementById("s2");
     if (Username ==""){
         span.innerHTML = "Username cannot be blank!";
         return false;
     }
     if (Password ==""){
         span.innerHTML = "Password cannot be blank!";
         return false;
     }
     for (let index = 0; index < admin.length; index++) {
         if(Username == admin[index].username  && Password == admin[index].password){
             return true;
         }
     }
     span.innerHTML = "Password Or Username do not exist";
 
     return 0;
     
 }