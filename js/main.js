const hamburger = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-end");
const navChild = document.querySelectorAll(".nav-wrapper a")
const card = document.querySelectorAll(".card-wrapper")
// const pink = document.querySelector('.pink')



card.forEach(el => {
  el.addEventListener('mouseenter', cardToggler)
})
card.forEach(el => {
  el.addEventListener('mouseleave', cardToggler)
})
let cardtoggle = false
function cardToggler(e) {
  let pink = e.target.children[1]
  pink.classList.toggle("show")
}





navChild.forEach(el => {
  el.addEventListener('click', toggleMenu);
})

hamburger.addEventListener('click', toggleMenu);

let showMenu = false;


function toggleMenu() {
  showMenu = !showMenu
  if (showMenu) {
    hamburger.classList.add('close')
    nav.classList.add('close')

  }
  else {
    hamburger.classList.remove('close')
    nav.classList.remove('close')
  }


}




// var reswidth =screen.width
// if(reswidth>467){
//   document.querySelector(".slider").classList.add("regular")

// }else{
//   document.querySelector(".slider").classList.remove("regular")

// }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//for image change

var ProductImg = document.getElementById("productImg")


function oe(id, src) {
  ProductImg.src = src
}





// smallImg.map( el => {
//   el.onclick = function() {
//     console.log("cliccked")
//   }
// })


// for(let i=0;i<smallImg.length;i++){
//   smallImg[i].onClick=function(){
//     console.log('clickked')
//   }
// }


