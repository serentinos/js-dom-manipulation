const container = document.querySelector(".container");
const quote = document.querySelector(".quote-h1");
const quoteAuthor = document.querySelector(".quote-author");
const quoteNew = document.querySelector(".quote-new");

const randomColor = () => {
  const range = 200;
  const randomHexadecimalArr = ["#"];
  for (let i = 0; i < 3; i++) {
    randomHexadecimalArr.push(
      Math.floor(Math.random() * range)
        .toString(16)
        .toUpperCase()
    );
  }
  // let randomHexadecimal = Math.floor(Math.random() * 256)
  //   .toString(16)
  //   .toUpperCase();

  container.style.backgroundColor = randomHexadecimalArr.join("");
};

const asyncTest = async () => {
  const res = await fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .catch((err) => console.log(err));

  randomColor();

  quote.textContent = `"${res.content}"`;
  quoteAuthor.textContent = `- ${res.author}`;
};
asyncTest();
quoteNew.addEventListener("click", asyncTest);
