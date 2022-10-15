import { randomColor } from "./randomColor.js";
import { getData } from "./getData.js";

const container = document.querySelector(".container");
const quote = document.querySelector(".quote-h1");
const quoteAuthor = document.querySelector(".quote-author");
const quoteNew = document.querySelector(".quote-new");

const newQuote = async () => {
  const quoteContent = await getData();
  quote.textContent = `"${quoteContent.content}"`;
  quoteAuthor.textContent = `- ${quoteContent.author}`;
  container.style.backgroundColor = randomColor();
};
quoteNew.addEventListener("click", newQuote);
newQuote();
