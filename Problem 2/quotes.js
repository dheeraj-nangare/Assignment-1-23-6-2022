let text = document .querySelector('.quote');
let author = document.querySelector('.author');
let nextBtn = document.querySelector('.next');

let getQuote = async () => {
  let res  = await fetch('https://type.fit/api/quotes');
  let quotes = await res.json();
  let num = Math.floor (Math.random()*quotes.length)
  let item = quotes[num];
  let quote = item.text;
  let authorName = item.author;
  text.innerText = quote;
  author.innerText = authorName;

}

nextBtn.addEventListener('click',getQuote);

getQuote()