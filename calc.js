function add_test(id)
{   var x;
    x = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('test').innerHTML += x + id; 
    
}
function sub(id)
{   var x;
    
    x = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('test').innerHTML += x + id; 
    
}
function prod(id)
{   var x;
    
    x = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('test').innerHTML += x + id; 
    
}
function divide(id)
{   var x;
    
    x = document.getElementById('input').value;
    document.getElementById('input').value = "";
    document.getElementById('test').innerHTML += x + id; 
    
}
function eq_final()
{   
    
    document.getElementById('input').value = eval(document.getElementById('test').innerHTML + document.getElementById('input').value);
    document.getElementById('test').innerHTML="";
}


function clr()
{
    document.getElementById('input').value = "";
    document.getElementById('test').innerHTML = "";
}