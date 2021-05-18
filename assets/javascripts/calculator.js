var min=0;
var max=0;
var requierd=true;
var isDetailedSimulator=false;
var list = new Object();
function color(el,num){
  var name=el.name;
  var radios=document.getElementsByName(name);
  radios.forEach(r=>{
    var id=r.id;
    document.getElementById("icon_"+id).style.filter="brightness(0%)";
  })
  document.getElementById("icon_"+num).style.filter="brightness(100%)";
}
function checkboxColor(id){
  var iconStyle= document.getElementById("icon_"+id).style.filter;
  if(iconStyle=="brightness(100%)")
  document.getElementById("icon_"+id).style.filter="brightness(0%)";
  else{
    document.getElementById("icon_"+id).style.filter="brightness(100%)";
  }
}
function calcSimulator(){
requierd=true;
document.getElementById("error").style.display="none";
if (isDetailedSimulator){
  calcDetailedSimulator();
  if(!requierd){
  document.getElementById("error").style.display="block"; 
  return;
  }
  document.getElementById("second-alert").style.display="block"; 
  document.getElementById("cost").style.display="none"; 
  document.getElementById("second-alert").scrollIntoView({ behavior: 'smooth', block: 'center' });
  return;
}
min=0;
max=0;
var platforms= document.getElementsByName("platforms");
list["question 1"]="";
platforms.forEach(p=>{
 if(p.checked){
  list["question 1"]+=p.value+",";
   if(p.value==3){
     add(7,15)
   }
   else{
   add(6,24)  
   } 
 }
})
var design=document.querySelector('input[name="design"]:checked');
if(!design)requierd=false;
else{
   if(design.value==2)
  add(4,10)
  list["question 2"]=design.value;
}

var server=document.querySelector('input[name="server"]:checked');
if(!server)requierd=false
else{
if(server.value==2){
  add(5,10)
}else if(server.value==3){
  add(6,15);
}
list["question 3"]=server.value;
}
var manage=document.querySelector('input[name="manage"]:checked');
if(!manage)requierd=false;
else{
if(manage.value==2){
add(3,9)
}
list["question 4"]=manage.value;
}
console.log(JSON.stringify(list));
document.getElementById("data").value = JSON.stringify(list);

if(!requierd){
  document.getElementById("error").style.display="block"; 
  }
  else{
      //  document.getElementById("alert").style.display="block"; change it!!!!!!!!!!!!
       document.getElementById("alert").style.display="block";
       document.getElementById("cost").style.display="none";
  }
document.getElementById("alert").scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function add(a,b){
min+=a;
max+=b;
document.getElementById("min").innerHTML = min;
document.getElementById("max").innerHTML = max;
}
function detailedSimulator(){

isDetailedSimulator=true;
document.getElementById("detailedSimulator").style.display="block";
document.getElementById("alert").style.display="none";
document.getElementById("dinamic-alert").style.display="none";
  document.getElementById("cost").style.display="block";
document.getElementById("calc-header").style.display="none";
document.getElementById("d-calc-header").style.display="block";
document.getElementById("contact").style.display="block";
window.scrollTo(0, 0);
}
function calcDetailedSimulator(){
var tracking=document.querySelector('input[name="geo-tracking"]:checked');
  if(!tracking)requierd=false;
  else{
    list["question 5"]=tracking.value;
  }
var chat=document.querySelector('input[name="chat"]:checked');
if(!chat)requierd=false;
else{
  list["question 6"]=chat.value;
}
var upload=document.querySelector('input[name="upload"]:checked');
if(!upload)requierd=false
else{
  list["question 7"]=upload.value;
}  
var payment=document.querySelector('input[name="payment"]:checked');
if(!payment)requierd=false
else{
  list["question 8"]=payment.value;
}
var wearable=document.querySelector('input[name="wearable-devices"]:checked');
if(!wearable)requierd=false
else{
  list["question 9"]=wearable.value;
}
var notifications=document.querySelector('input[name="notifications"]:checked');
if(!notifications)requierd=false
else{
  list["question 10"]=notifications.value;
}
var offline=document.querySelector('input[name="offline"]:checked');
if(!offline)requierd=false
else{
  list["question 11"]=offline.value;
}
var real_time=document.querySelector('input[name="real-time"]:checked');
if(!real_time)requierd=false
else{
  list["question 12"]=real_time.value;
}
console.log(list);
document.getElementById("data").value = JSON.stringify(list);
}
