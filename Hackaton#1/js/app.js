let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('hovered-link');
    });
});

let phrases = [
    {text: "Bring your idea to life"},
    {text: "Learn how to launch your startup"},
    {text: "Tell the investor about your idea"},
    {text: "Start on November 8"} ];

    function getRandomElement(arr) {
        let randIndex = Math.floor(Math.random() * arr.length);
        return arr[randIndex];
      }
      let button = document.querySelector(".button");
      let phrase = document.querySelector(".phrase");
      let sentence = document.querySelector(".sentence");

      button.addEventListener("click", function () {
        let randomElement = getRandomElement(phrases);
        smoothly(phrase, "textContent", randomElement.text)
        if (randomElement.text.length > 30) {
            sentence.style.fontSize = "33px";
          } else {
            sentence.style.fontSize = "42px";
          }
        });
        for (let i = 0; i <= 4; i++) {
          smoothly(phrase, "textContent", phrases[i].text);

          // log array elements to the console using i
        }