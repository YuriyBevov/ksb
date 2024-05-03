const moreBtns = document.querySelectorAll(".review-card__btn");

if (moreBtns.length) {
  const onClickFillReviewModal = (evt) => {
    const modal = document.querySelector("#review-modal");

    if (modal) {
      const content = modal.querySelector(".modal__body");
      const isDirty = content.querySelector(".review-card");

      if (isDirty) isDirty.remove();

      var text = evt.currentTarget.getAttribute("data-review-text");
      const clone = evt.currentTarget.parentNode.cloneNode(true);

      clone.querySelector("button").remove();
      clone.querySelector(".review-card__content").innerHTML = text;

      content.appendChild(clone);
    }
  };

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", onClickFillReviewModal);
  });
}
