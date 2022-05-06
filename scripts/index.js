import header from "../components/haeader.js";
let head = document.getElementById("header")
head.innerHTML = header();
// document.body.innerHTML = header();
import cardsBox from "../components/cards.js";
let card = document.getElementById('cards_box')
card.innerHTML = cardsBox();

import footer from "../components/footer.js";
let foot = document.getElementById("footer")
foot.innerHTML = footer();
