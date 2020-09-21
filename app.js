function scrollAppear() {
  var introText = document.querySelector(".intro-text");
  var intoPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/1.5;
  console.log(intoPosition + "\n" + screenPosition);
  if(intoPosition < screenPosition) {
    console.log(1);
    introText.classList.add("intro-appear");
    console.log(introText.classList);
  }
}
window.addEventListener("scroll", scrollAppear);
