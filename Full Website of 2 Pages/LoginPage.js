// var modal = document.getElementById('id01');

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".black").css("background" , "blue");
//         }
  
//         else{
//             $(".black").css("background" , "#333");  	
//         }
//     })
//   });
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
// let loginArr  = JSON.parse(localStorage.getItem("btn")) ||[];







  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();

    if(signupArr.length===0){
      alert("No user exist yet");
      return;
    }
    let obj ={
      email:form.email.value,
      password:form.password.value,
    }
    signupArr.forEach(function(ele){
      
      if(ele.email===obj.email && ele.password == obj.password){
        localStorage.setItem("btn1",JSON.stringify(ele));
        alert("You have Successfully Logged in");
        window.location.href="https://toggl.com/track/";
      }
      else{
        window.alert("invalid email or password");
      }
    })
    
    
  });

