const tela1 = document.querySelector(".tela1");
const tela2 = document.querySelector(".tela2");

const s1 = [
  "A vida trará coisas boas se tiver paciência.",
  "Todos os dias organize seus cabelos, por que não faz o mesmo com o coração?",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Os defeitos são mais fortes quando o amor é fraco.",
  "As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram."
];

function handleTryClick(event) {
  event.preventDefault();

  if (tela2.classList.contains("hide")) {
    tela1.classList.add("hide");
    tela2.classList.remove("hide");

    const s1random = s1[Math.floor(Math.random() * s1.length)];

    document.querySelector(".tela2 p").innerText = s1random;
  }
}

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
  tela1.classList.remove("hide");
  tela2.classList.add("hide");
});