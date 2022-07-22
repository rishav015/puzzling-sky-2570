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
  

  // 👇️ optionally change the text color
  // input.style.color = 'white';
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

})

//   document.querySelector("form").addEventListener("submit",login)


//  function login(event){
//     event.preventDefault();


//   }