

// Search suggestions
function searchSuggestion(val) {
  const input = document.getElementById('search');
  input.value = val;
}


// Cursor
options = {
  "outerStyle": "disable",
  "hoverEffect": "pointer-blur",
  "hoverItemMove": false,
  "defaultCursor": false,
  "outerWidth": 30,
  "outerHeight": 30
}
magicMouse(options);


// Duvidas
function duvidas(evt) {

  var i, duvida;

  duvida = document.querySelectorAll(".duvidas article");
  for (i = 0; i < duvida.length; i++) {
    duvida[i].classList.remove("active")
  }

  evt.currentTarget.parentElement.className = "active";
}


// Category buttons menu
function categoryButtonMark() {

  var i, categoryButton, categoryContainer, conta, produtos, financeiro, compliance;
  categoryButton = document.querySelectorAll('.category_bt');
  categoryContainer = document.querySelector('.category_container');
  conta = document.querySelector('.category_bt.conta');
  produtos = document.querySelector('.category_bt.produtos');
  financeiro = document.querySelector('.category_bt.financeiro');
  compliance = document.querySelector('.category_bt.compliance');

  for (i = 0; i < categoryButton.length; i++) {
    // categoryButton[i].classList.remove("active");

    if (window.location.href.indexOf("/conta") > -1) {
      conta.classList.add("active");
      categoryContainer.classList.add("conta");

    } else if (window.location.href.indexOf("/produtos") > -1) {
      produtos.classList.add("active");
      categoryContainer.classList.add("produtos");

    } else if (window.location.href.indexOf("/financeiro") > -1) {
      financeiro.classList.add("active");
      categoryContainer.classList.add("financeiro");

    } else if (window.location.href.indexOf("/compliance") > -1) {
      compliance.classList.add("active");
      categoryContainer.classList.add("compliance");

    }

  }
}
categoryButtonMark();



// Copy to clipboard
function copyURL() {

  var copyText = document.getElementById("inputURL");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("tooltip_clipboard");
  tooltip.innerHTML = "Copiado!";
}
function outTooltip() {
  var tooltip = document.getElementById("tooltip_clipboard");
  tooltip.innerHTML = "Copiar URL";
}



// Reading progress bar
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".reading_progress_bar", {
    width: '100%',
    scrollTrigger: {
      scroller: ".content",
      trigger: ".post_container article",
      start: "top center",
      end: "bottom top",
      scrub: true,
      markers: false
    }
  });

});


