var sliderIndex     = 1;                                                  //? sliderIndex 
var sliderIndexTime = 0;                                                  //? sliiderIndexTime
var slides          = document.getElementsByClassName("artikel-berita");  // getElementID
var i;

slideTime(); //call funct slide

function slideButton(jml) {
  $jml = sliderIndex += jml;
  if ($jml < 1) { sliderIndex = slides.length }
  if ($jml > slides.length) { sliderIndex = 1 }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[sliderIndex - 1].style.display = "block";
}

function slideTime() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  sliderIndexTime++;
  if (sliderIndexTime > slides.length) { sliderIndexTime = 1 }
  slides[sliderIndexTime - 1].style.display = "block";
  setTimeout(slideTime, 4500); // 4.5 etik
}