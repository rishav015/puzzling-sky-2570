const inp = document.getElementById('email');
const AInput = document.getElementById("password");
let count = 0;
inp.addEventListener('click', function onClick(event) {
    event.preventDefault();
  const input = document.getElementById('email');

  count++;
  if(count%2===0){
    input.style.backgroundColor = 'rgb(44, 19, 56)';
    input.style.color = "white"
  }
  else{
    input.style.backgroundColor = "rgb(252, 229, 216)";
    input.style.color = "black"

  }
});

AInput.addEventListener("click",function onClick(event){
    event.preventDefault();
  const AInput = document.getElementById("password");
  count++;
  if(count%2===0){
    AInput.style.backgroundColor = 'rgb(44, 19, 56)';
    AInput.style.color = "white"
  }
  else{
    AInput.style.backgroundColor = 'rgb(252, 229, 216)';
    AInput.style.color = "black"
  }

});





let form = document.querySelector("form");


let signupArr  = JSON.parse(localStorage.getItem("btn")) || [];

form.addEventListener("submit",function(event){
  event.preventDefault();
  let obj = {
    email:form.email.value,
    password:form.password.value,
  }
  if(obj.email =="" && obj.email=="" ){
    alert("Please Enter Your Email and Password");
  }

    signupArr.push(obj);
  localStorage.setItem("btn",JSON.stringify(signupArr));
    window.location.href ="LoginPage.html"
});