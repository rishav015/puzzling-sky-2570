const inp = document.getElementById('email');
const AInput = document.getElementById("password");

inp.addEventListener('click', function onClick(event) {
    event.preventDefault();
  const input = document.getElementById('email');


    input.style.backgroundColor = "rgb(252, 229, 216)";
    input.style.color = "black"

});

AInput.addEventListener("click",function onClick(event){
    event.preventDefault();
  const AInput = document.getElementById("password");
    AInput.style.backgroundColor = 'rgb(252, 229, 216)';
    AInput.style.color = "black"

});





let form = document.querySelector("form");


let signupArr  = JSON.parse(localStorage.getItem("btn")) || [];

form.addEventListener("submit",function(event){
  event.preventDefault();
  let obj = {
    email:form.email.value,
    password:form.password.value,
  }
  if(obj.email =="" && obj.password==""){
    alert("Please Enter Your Email and Password");
    return
  }
  else{
    signupArr.push(obj);
    localStorage.setItem("btn",JSON.stringify(signupArr));
      window.location.href ="LoginPage.html"
  }

    
});
