window.document.addEventListener("DOMContentLoaded", () => {

    let arrowLeft = document.querySelector(".arrow-left"),
        arrowRight = document.querySelector(".arrow-right"),
        slider = document.querySelector(".slider");
    
    function sliderChangeFromSlide1ToSlide2 () {
        slider.classList.remove("slide1");
        slider.classList.add("slide2");
        slider.classList.remove("slider-border-red");
        slider.classList.add("slider-border-blue");
        arrowLeft.classList.remove("arrow-left-red");
        arrowLeft.classList.add("arrow-left-blue");
        arrowRight.classList.remove("arrow-right-red");
        arrowRight.classList.add("arrow-right-blue");
    }

    function sliderChangeFromSlide2ToSlide1 () {
        slider.classList.remove("slide2");
        slider.classList.add("slide1");
        slider.classList.remove("slider-border-blue");
        slider.classList.add("slider-border-red");
        arrowLeft.classList.remove("arrow-left-blue");
        arrowLeft.classList.add("arrow-left-red");
        arrowRight.classList.remove("arrow-right-blue");
        arrowRight.classList.add("arrow-right-red");
    }

    window.addEventListener("click", (e) => {

        if (e.target.classList.contains('arrow-left')) {

            if (slider.classList.contains("slide1")) {
                sliderChangeFromSlide1ToSlide2();
            }

            else {
                sliderChangeFromSlide2ToSlide1();
            }
        }

        if (e.target.classList.contains('arrow-right')) {

            if (slider.classList.contains("slide1")) {
                sliderChangeFromSlide1ToSlide2();
            }

            else {
                sliderChangeFromSlide2ToSlide1();
            }
        }

});