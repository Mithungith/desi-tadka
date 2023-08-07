/*
const desiMobile = document.querySelector(".desi-mobile");
const openDaily = document.querySelector(".open-daily img");


document.addEventListener("mouseover", (e) => {
    
  let valy = ((e.screenY - 129) / 598) * 30;
  let valx = ((1350 - e.screenX) / 2500) * 30;
  console.log("valX1 " +valx);
  console.log(valy,valx);
  if (valx <= 10) {
    let newValx = -(20 -(valx * 2));
    desiMobile.style.transform = `rotateX(${newValx}deg) rotateY(${valy}deg)`;
    console.log("newValX "+ newValx);
  } 
  else {
    desiMobile.style.transform = `rotateX(${valx}deg) rotateY(${valy}deg)`;
    console.log("valX " +valx);
  }
});
*/
/*=======================New Js============================== */
let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX/4 +"deg) "
    + "   rotateY("+ calcY/2 +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(ex1Layer, position);
  });
};
/*=======================New Js End============================== */
/*=======================Animate Js End============================== */
const headingNew = document.querySelector('.animateHead');
const btnNew = document.querySelector('.pop-animamtion-btn');
headingNew.innerHTML = headingNew.textContent.replace(/\S/g, "<span class='animateSpan'>$&</span>")

document.querySelectorAll('.animateSpan').forEach((span, index) => {
  span.style.setProperty('--delay', `${index * 0.1}s`)
});


btnNew.addEventListener("click", e => {
    headingNew.style.setProperty('--animation', e.target.getAttribute('data-animation'))
    
    headingNew.classList.remove('animate')
    void headingNew.offsetWidth
    headingNew.classList.add('animate')
  })

  btnNew.click();
  setInterval(() => {
    btnNew.click();
  }, 3900);
/*=======================Animate Js End============================== */