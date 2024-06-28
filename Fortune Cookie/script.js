let fortuneCookiePhrases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não há que ser forte. Há que ser flexível.",
  "Todos os dias são pequenas sementes para um futuro grandioso.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Nunca deixe de sonhar, pois só os sonhadores podem conquistar o infinito.",
  "Os problemas são sinal de crescimento. Enfrente-os com sabedoria.",
]

let randomNumber = Math.floor(Math.random() * fortuneCookiePhrases.length)

let img = document.querySelector(".screen_One img")
img.addEventListener("click", clickOnTheImage)
img.addEventListener("keydown", clickOnTheImage)
function clickOnTheImage() {
  toggle()

  let p = document.querySelector(".screen_Two p")
  p.innerText = fortuneCookiePhrases[randomNumber]
}

let button = document.querySelector(".screen_Two button")
button.addEventListener("click", clickOnButton)
button.addEventListener("keydown", clickOnButton)
function clickOnButton() {
  toggle()
  randomNumber = Math.floor(Math.random() * fortuneCookiePhrases.length)
}

function toggle() {
  document.querySelector(".screen_One").classList.toggle("hidden")
  document.querySelector(".screen_Two").classList.toggle("hidden")
}
