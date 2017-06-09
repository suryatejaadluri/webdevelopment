function next_step1() {
document.getElementById("first").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.color = "white";
}

function prev_step1() {
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("active1").style.color = "white";
document.getElementById("active2").style.color = "gray";
}

function next_step2() {
document.getElementById("second").style.display = "none";
document.getElementById("third").style.display = "block";
document.getElementById("active3").style.color = "white";
}

function prev_step2() {
document.getElementById("third").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.color = "white";
document.getElementById("active3").style.color = "gray";
}
var err=0;
function user()
{
var x=document.getElementById('username').value;
if(x=="")
{
document.getElementById('er1').style.display='block';
err=1;

} else  {                      
document.getElementById('er1').style.display='none';
err=0;
}
}

function Emailv(){
var y=document.getElementById('Email').value;
var atpos = y.indexOf("@");
var dotpos = y.lastIndexOf(".");
if (atpos<1|| dotpos<atpos+2 || dotpos+2>=y.length) {

document.getElementById('er2').style.display='block';
err=1;
}
else {document.getElementById('er2').style.display='none';
err=0;
}}

function passv(){
var z=document.getElementById('password').value;
if(z=="")
{       
document.getElementById('er3').style.display='block';
document.getElementById('er3').innerHTML='please enter your password';
err=1;

}

else if(z.length>=10||z.length<4)
{
document.getElementById('er3').style.display='block';
document.getElementById('er3').innerHTML='password length should btw 4 to 10';
err=1;

}           
else 
{
err=0;
document.getElementById('er3').style.display='none';
}}
function validate()
{

user();
Emailv();
passv();

if(err==0)
{
next_step1();
}

return false;
}

function fnmv()
{
var data=document.getElementById("fnm").value;

if(data=="")
{
document.getElementById("er4").style.display="block";
err=1;
}
else
{
document.getElementById("er4").style.display="none";
err=0;
sessionStorage.setItem("firstname",JSON.stringify(data));
}
}
function lnmv()
{
var data=document.getElementById("lnm").value;
if(data=="")
{
document.getElementById("er5").style.display="block";
err=1;
}
else
{
document.getElementById("er5").style.display="none";
err=0;
sessionStorage.setItem("lastname",JSON.stringify(data));
} 

}
function contv()
{
var data=document.getElementById("cont").value;
if(data=="")
{
document.getElementById("er6").style.display="block";
err=1;
}
else
{
document.getElementById("er6").style.display="none";
err=0;
sessionStorage.setItem("contact",JSON.stringify(data));
}  
}
function addrv()
{
var data=document.getElementById("addr").value;
if(data=="")
{
document.getElementById("er7").style.display="block";
err=1;
}
else
{
document.getElementById("er7").style.display="none";
err=0;
sessionStorage.setItem("address",JSON.stringify(data));
}  
}

function validate2()
{
fnmv();
lnmv();
contv();
addrv();

if(err==0)
{
var gender=document.getElementById("gend").value;
sessionStorage.setItem("gender",gender);    
var twitter=document.getElementById("twi").value;
sessionStorage.setItem("twitter",twitter);
var facebook=document.getElementById("fb").value;
sessionStorage.setItem("facebook",facebook);
var gplus=document.getElementById("g+").value;
sessionStorage.setItem("gplus",gplus);
var username=document.getElementById("username").value;
sessionStorage.setItem("username",username);
var password=document.getElementById("password").value;
sessionStorage.setItem("password",password);
var email=document.getElementById("Email").value;
sessionStorage.setItem("email",email);         
alert("succefully submitted"); 
location.reload();   
    
}
return false;

}



