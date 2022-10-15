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

const getData = async () => {
  try {
    const res = await (await fetch("https://api.quotable.io/random")).json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const newQuote = async () => {
  const quoteContent = await getData();
  quote.textContent = `"${quoteContent.content}"`;
  quoteAuthor.textContent = `- ${quoteContent.author}`;
  randomColor();
};
quoteNew.addEventListener("click", newQuote);
