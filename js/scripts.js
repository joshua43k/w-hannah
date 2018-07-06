let aboutH1 = document.querySelector('#about_h1');
let fullName = 'Hannah. Gonzalez';
let i = 0;
let speed = 150;

function typeName() {
  if (i < fullName.length) {
    aboutH1.innerHTML += fullName.charAt(i);
    i++
    setTimeout(typeName, speed);
  }
}

typeName()
