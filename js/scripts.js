const aboutH1 = document.querySelector('#about_h1');
const aboutImg = document.querySelector('#about_img');
const aboutFullName = 'Hannah. Gonzalez';
let aboutInd = 0;
let aboutSpeed = 150;

function typeName() {
  if (aboutInd < aboutFullName.length) {
    aboutH1.innerHTML += aboutFullName.charAt(aboutInd);
    aboutInd++;
    setTimeout(typeName, aboutSpeed);
  }
}

function fadeIn(){
  aboutImg.classList.remove('fade-out');
  aboutImg.classList.add('fade-in');
}

fadeIn()
typeName();