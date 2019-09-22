import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ];

  initialize() {
    this.showCurrentSlide();
  }

  next() {
    this.index++;
  }

  previous() {
    this.index--;
  }

  showCurrentSlide(index) {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", i === this.index);
      console.log("showSlide", el);
    })
  }

  get index() {
    let value = parseInt(this.data.get("index"));
    if (Number.isNaN(value)) value = 0;
    return value;
  }

  set index(value) {
    this.data.set("index", value);
    this.showCurrentSlide();
  }
}
