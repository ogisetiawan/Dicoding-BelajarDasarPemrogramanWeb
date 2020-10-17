const checkbox = document.getElementById('mode') //? Get element checkbox
const tagHtml = document.getElementsByTagName('html')[0] //? get tag html

//? eventJSCheckbox
checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    tagHtml.setAttribute("theme", "gelap-mode"); //? setAttributenya jadi gelap-mode
  } else {
    tagHtml.setAttribute("theme", "");
  }
})