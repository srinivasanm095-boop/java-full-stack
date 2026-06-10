const quoteBtn = document.getElementById('quoteBtn');
const quoteBox = document.getElementById('quoteBox');
const yearSpan = document.getElementById('year');

const quotes = [
  '“Code with curiosity, design with purpose, and build with care.”',
  '“Small improvements each day create strong software.”',
  '“A great portfolio tells your story with confidence.”'
];

if (quoteBtn && quoteBox) {
  quoteBtn.addEventListener('click', () => {
    const nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = nextQuote;
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
