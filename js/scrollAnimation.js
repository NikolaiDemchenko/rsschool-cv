window.document.addEventListener("DOMContentLoaded", () => {

    let servises = document.querySelector(".servises"),
        portfolio = document.querySelector(".portfolio"),
        main = document.querySelector("main"),
        footer = document.querySelector("footer"),
        body = document.querySelector("body"),
        navMenu = document.querySelector(".nav-menu"),
        logo = document.querySelector(".logo");

    function removeScroll () {
        body.classList.remove("no-scroll");
        navMenu.classList.remove("show");
        navMenu.classList.add("hide");    
    }

    window.addEventListener("click", (e) => {

        if (e.target.classList.contains("singolo")) {

            e.preventDefault();
            main.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (body.classList.contains("no-scroll")) {
                removeScroll();
            }

            if (logo.classList.contains("hide")){
                logo.classList.add("show");
                logo.classList.remove("hide");
            }
                
        }

        if (e.target.classList.contains("link-home")) {

            e.preventDefault();
            main.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (body.classList.contains("no-scroll")) {
                removeScroll();
            }

            if (logo.classList.contains("hide")){
                logo.classList.add("show");
                logo.classList.remove("hide");
            }
        }

        if (e.target.classList.contains("link-servises")) {
            e.preventDefault();
            servises.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (body.classList.contains("no-scroll")) {
                removeScroll();
            }

            if (logo.classList.contains("hide")){
                logo.classList.add("show");
                logo.classList.remove("hide");
            }
        }

        if (e.target.classList.contains("link-portfolio")) {
            e.preventDefault();
            portfolio.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (body.classList.contains("no-scroll")) {
                removeScroll();
            }

            if (logo.classList.contains("hide")){
                logo.classList.add("show");
                logo.classList.remove("hide");
            }
        }

        if (e.target.classList.contains("link-contact")) {
            e.preventDefault();
            footer.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (body.classList.contains("no-scroll")) {
                removeScroll();
            }

            if (logo.classList.contains("hide")){
                logo.classList.add("show");
                logo.classList.remove("hide");
            }
        }
    });
});