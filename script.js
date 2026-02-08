// Scroll to final section
function scrollToFinal() {
  document.querySelector(".final").scrollIntoView({
    behavior: "smooth"
  });
}

// YES
function yesLove() {
  document.getElementById("response").innerText =
    " I love you loooooooot JINUUU ❤️🥹";
}

// NO
function goNo() {
  window.location.href = "no.html";
}

// BACK
function goBack() {
  window.location.href = "index.html";
}

// IMAGE SLIDER (NO PAGE ONLY)
const slides = document.querySelectorAll(".slide");
if (slides.length > 0) {
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4000);
}
