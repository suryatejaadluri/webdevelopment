function user()
{
var x=document.getElementById('username').value;
if(x=="")
{
document.getElementById('er1').style.visibility='visible';

} else                        
document.getElementById('er1').style.visibility='hidden';
}

function Emailv(){
var y=document.getElementById('Email').value;
var atpos = y.indexOf("@");
var dotpos = y.lastIndexOf(".");
if (atpos<1|| dotpos<atpos+2 || dotpos+2>=y.length) {

document.getElementById('er2').style.visibility='visible';
}
else document.getElementById('er2').style.visibility='hidden';
}

function passv(){
var z=document.getElementById('password').value;
if(z=="")
{       
document.getElementById('er3').style.visibility='visible';
document.getElementById('er3').innerHTML='please enter your password';

}

else if(z.length>=10||z.length<4)
{
document.getElementById('er3').style.visibility='visible';
document.getElementById('er3').innerHTML='password length should btw 4 to 10';

}           
else document.getElementById('er3').style.visibility='hidden';
}
function validate()
{
user();
Emailv();
passv();
document.getElementById("myForm").reset();  
return false;
}


