import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ];

  initialize() {
    this.showCurrentSlide();
    this.lastIndex = this.slideTargets.length - 1;
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
    // Wrap around first and last index
    if (value < 0) {
      value = this.lastIndex;
    } else if (value > this.lastIndex) {
      value = 0;
    }

    this.data.set("index", value);
    this.showCurrentSlide();
  }
}
