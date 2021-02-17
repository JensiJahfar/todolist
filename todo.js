let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
function validate(){
    if (email.value==""||pwd.value=="") {
    alert("Fields cannot be empty");
    return false;
}
if(email.value!="admin"||pwd.value!="12345"){
    alert("Username or password is Incorrect!!!")
    return false;
    
}
else{
    return true;
}

}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
     
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        var output = "";
        for(var i=0; i<response.length;i++){
          output +="<li>"+ response[i].title + "</li>";
        }
        document.getElementById("demo").innerHTML =output;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
  }