export default class Slider {
    constructor({page = "", btns = "", next = "", prev = ""} = {}){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
    }
}