function limitStr(elem, str, n) {
  str = str.trim();
  if (str.length > n) {
    elem.closest('.review-card').querySelector(".review-card__btn").style.display = "flex";
    return str.slice(0, n) + "...";
  } else {
    return str;
  }
}

const texts = document.querySelectorAll(".review-card__text");

if (texts.length) {
  texts.forEach((text) => {
    text.innerHTML = limitStr(text, text.innerHTML, 160);
  });
}
