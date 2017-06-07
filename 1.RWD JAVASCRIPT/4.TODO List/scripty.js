function get_todos() {
    var todos = new Array;
    var todos_str = sessionStorage.getItem('list');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
};


function add()
{
    
var todo=document.getElementById("databox").value;
if(todo=="")
{
    alert("please enter your todo");
}
    else{
var todos=get_todos();
todos.push(todo);

sessionStorage.setItem("list",JSON.stringify(todos));
show();
    

return false;
}};

function show()
{
var todos=get_todos();

var html="<ul>";
    
    for(i=0;i<todos.length;i++)
        {
            html+="<li>"+todos[i]+"</li>";
        }
    html+="</ul>";
    document.getElementById("test").innerHTML=html;
    


};