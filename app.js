import { Validator } from "./validator.js";

// __________________________________________________________JS Burger Navbar_______________________
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");
  const pill = document.querySelector(".pill");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav_active");
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("active");
  });
};
navSlide();
// __________________________________________________________JS Full Page Scroll_______________________

let scrollPage = () => {
  let ticking = false;
  var currentSection = 0;
  var viewable = false;
  let sections = document.getElementsByClassName("background");
  let length = sections.length;

  let circlesProgess = () => {

    const circles = document.querySelectorAll(".circle");
    circles.forEach(elem => {
      var dots = elem.getAttribute("data-dots");
      var marked = elem.getAttribute("data-percent");
      var percent = Math.floor(dots*marked/100);
      var rotate = 360/dots;
      var points = "";

      for(let i = 0; i< dots; i++){
          points+=`<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
      }
      elem.innerHTML = points;

      const pointsMarked = elem.querySelectorAll(".points");
      for(let i = 0; i< percent; i++){
          pointsMarked[i].classList.add("marked");
      }
    });
  };

  let scrollDown = () => {
    if (currentSection < length - 1) {
      ticking = true;
      currentSection += 1;
      sections[currentSection - 1].classList.add("scroll-down");
      // console.log(sections[1].classList);

    circlesProgess();
    pause();
    if(currentSection!==2){return viewable = true;};
    // else {startAbout()};
  };
  // ________________________________________________JS 3D Carroussel Slider animation launcher_______________________

  let startSlide = () => {

      // myWork.addEventListener("mouseenter", () => {
        setTimeout(init, 100);
        // ________________________________________________JS 3D Carroussel Slider animation launcher_______________________

      // });

  };
  startSlide();
  return viewable;
};


  let scrollUp = () => {
    if (currentSection !== 0) {
      ticking = true;
      currentSection -= 1;
      sections[currentSection].classList.remove("scroll-down");
      pause();
    }
  };

  let handleScroll = (event) => {
    // document.addEventListener("keypress", (e) => {
    //   key.textContent = e.key;});
    if (!ticking) {
      if (event.deltaY > 30) {
        scrollDown();
      } else if (event.deltaY < -30) {
        scrollUp();
      }
    }
  };

  let pause = () => {
    setTimeout(() => {
      ticking = false;
    }, 500);
  };

  window.addEventListener("wheel", handleScroll);


// __________________________________________________________JS 3D Carroussel Slider_______________________

// let slider = () => {
  let radius = 340;
  let autoRotate = true;
  let rotateSpeed = -60;
  let imgWidth = 190;
  let imgHeight = 230;
  let mouseY = "";
  
  // mouseY = window.Event.offsetY;
  // console.log(mouseY);
  // myWork.addEventListener("mousemove", (e) => {
  //   mouseY = e.target.value;
  //   console.log(e.target.value);
  // });

//   currentSection===2 ? setTimeout(init, 50) : false;


  let odrag = document.getElementById("drag");
  let ospin = document.getElementById("spin");
  let aImg = ospin.getElementsByTagName("a");
  let slider = document.getElementById("slider");

  let aEle = [...aImg];

  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

  let ground = document.getElementById("ground");

  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";

  function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
  }
  
  function playSpin(yes){
    ospin.style.animationPlayState = (yes?'running':'paused');
    // let animationPlayState = [];
    //   ospin.animation.animationPlayState = (yes ? "running" : "paused");
    //   console.log(animationPlayState);
  }

  let sX, sY, nX, nY, desX = 0, desY = 0,tX = 0,tY = 10;

  if (autoRotate) {
    let animationName = (rotateSpeed > 0 ? "spin" : "spinRevert");
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)} s infinite linear`;
  }
  // if (autoRotate) {
  //   var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  //   ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
  // }

  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    let sX = e.clientX,
      sY = e.clientY;
      

    this.onpointermove = function (e) {
      e = e || window.event;
      let nX = e.clientX,
        nY = e.clientY;

      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;

      applyTransform(odrag);

      sX = nX;
      sY = nY;
    };

    this.onpointerup = function (e) {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;

        applyTransform(odrag);

        playSpin(false);

        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
      e.stop
    };
    return true;
  };
  
// };
// slider();
};
scrollPage();

let fullInput=document.getElementById("full").value;
let  mailInput=document.getElementById("mail").value;
let  sbjtInput=document.getElementById("sbjt").value;
let  messInput=document.getElementById("mess").value;
const contactForm = document.getElementById("contact-form");

in_form.addEventListener("change", (e) => {
  e.preventDefault();
  checkinputs();
});

const checkinputs = ()=>{
  let result=[];
  
function displayError(input,message){
  let element = document.getElementById(input).nextElementSibling;
  let inputerr = document.getElementById(input);
  let error = document.getElementsByClassName("error");
  let hidden = document.getElementsByClassName("hidden");
  element.textContent =message;
  element.style.color="rgb(249, 79, 79)";
  element.classList.add("err");
  inputerr.classList.add("error");
  inputerr.classList.remove("hidden");
}
function displayValid(input){
  let inputerr = document.getElementById(input);
  inputerr.classList.add("sccss");
  inputerr.classList.remove("hidden");
  let element = document.getElementById(input).nextElementSibling;
  element.textContent ="";

}
  if(Validator.name(full.value)){
    return displayError("full",Validator.name(full.value))
  } else if(Validator.name(full.value)==false){
    displayValid("full",Validator.name(full.value));
    fullInput = result.push(full.value);
    fullInput=true;    
  };
  if(Validator.email(mail.value)){
    return displayError("mail",Validator.email(mail.value))
  } else if(Validator.email(mail.value)==false){
    displayValid("mail",Validator.email(mail.value));
    mailInput = result.push(mail.value);
    mailInput=true;
  };
  if(Validator.subject(sbjt.value)){
    return displayError("sbjt",Validator.subject(sbjt.value))
  } else if (Validator.subject(sbjt.value)==false){
    displayValid("sbjt",Validator.subject(sbjt.value));
    sbjtInput = result.push(sbjt.value);
    sbjtInput=true;
  };
  if(Validator.mssag(mess.value)){
    return displayError("mess",Validator.mssag(mess.value))
    console.log(mess.value);
  } else if (Validator.mssag(mess.value)==false){
    displayValid("mess",Validator.mssag(mess.value));
    messInput = result.push(mess.value);
    messInput=true;
    console.log(result);
  };



};
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    fullInput == true &&
    mailInput == true &&
    sbjtInput == true &&
    messInput == true
  ) {
    document.getElementById("failure").style.color = "transparent";
    document.getElementById("success").innerHTML = "Votre message a été envoyé avec succès. Merci!";
  } else {
    document.getElementById("success").style.color="transparent";
    document.getElementById("failure").innerHTML = "Ooops...votre message n'a pas pu être envoyé.";
  }
});




contactForm.addEventListener("click",async  () =>{
  console.log("object");
  let test=await fetch("./mail.php").then(res=>res.text())
  console.log(test);
});





//   checkInputs();

// const checkInputs = () => {

// };

