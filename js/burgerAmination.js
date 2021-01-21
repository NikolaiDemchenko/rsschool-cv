window.document.addEventListener("DOMContentLoaded", () => {

    let navMenu = document.querySelector(".nav-menu"),
        body = document.querySelector("body"),
        logo = document.querySelector(".logo");
    

    window.addEventListener("click", (e) => {

        if (e.target.classList.contains("burger-img")) {

            if (navMenu.classList.contains("hide")){
                navMenu.classList.remove("hide");
                navMenu.classList.add("show");
                body.classList.add("no-scroll");
                
                if (logo.classList.contains("show")){
                    logo.classList.remove("show");
                    logo.classList.add("hide");
                }
                else {
                    logo.classList.add("show");
                    logo.classList.remove("hide");
                }

            }
            else {
                navMenu.classList.remove("show");
                navMenu.classList.add("hide");
                body.classList.remove("no-scroll");
                
                if (logo.classList.contains("show")){
                    logo.classList.remove("show");
                    logo.classList.add("hide");
                }
                else {
                    logo.classList.add("show");
                    logo.classList.remove("hide");
                }
            }
        }

    });
});