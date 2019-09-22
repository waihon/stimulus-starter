import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ];

  initialize() {
    let index = parseInt(this.data.get("index"));
    if (Number.isNaN(index)) index = 0;
    this.showSlide(index);
  }

  next() {
    this.showSlide(this.index + 1);
  }

  previous() {
    this.showSlide(this.index - 1);
  }

  showSlide(index) {
    this.index = index;
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", i === index);
      console.log("showSlide", el);
    })
  }
}
