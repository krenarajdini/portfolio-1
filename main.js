// marrim butonin ne fillim me get by id
let butoniIm = document.getElementById("butoniIm");

// kur useri leviz poshte 20px nga faqja kryesore e dokumentit paraqit butonin
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    butoniIm.style.display = "block";
  } else {
    butoniIm.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

