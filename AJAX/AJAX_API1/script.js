
function showCustomer(str) {
    
    var i=parseInt(str);
  var xhttp;    
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       
      var datajson=JSON.parse(this.responseText);
      document.getElementById("txtHint").innerHTML="<table><tr><th>id</th><th>first_name</th><th>last_name</th></tr><tr><td>"+datajson.data[i].id+"</td><td>"+datajson.data[i].first_name+"</td><td>"+datajson.data[i].last_name+"</td></tr></table>" ;
    }
  };
  xhttp.open("GET", "https://reqres.in/api/users?page=2", false);
  xhttp.send();
}
