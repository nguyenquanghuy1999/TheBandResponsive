const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function handleBtnBuyTickets() {

    // click btn buy tickets modal open
    $$(".tour-buy-btn").forEach(buyBtn => {
        buyBtn.onclick = () => {
            $(".modal").classList.add("open");
            $('.modal-container').style.animation = "modalShownTopCenter ease 0.6s ";
        }
    })

    // click close off modal
    $(".modal-close").onclick = () => {
        $('.modal-container').style.animation = "modalOff ease 0.8s";
        setTimeout(() => {
            $(".form-input").value = "";
            $(".modal").classList.remove("open");
        }, 300)

    }

    //  click modal off
    $(".modal").onclick = () => {
        $(".modal").classList.remove("open");
    }

    // ngăn cản sự kiện nổi bọt của thẻ cha (modal)
    $('.modal-container').onclick = (e) => e.stopPropagation();


}
handleBtnBuyTickets();

function handleClickMenuItemMoblile() {
    const header = document.querySelector("#header");
    const headerHeight = header.clientHeight;

    // on-off menu
    const menuNavEL = document.querySelector(".mobile-menu-btn");
    if (menuNavEL) {
        menuNavEL.onclick = () => {
            const isOpen = header.clientHeight === headerHeight;
            if (isOpen) {
                header.style.height = "auto";
            } else {
                header.style.height = null;;
            }
        }
    }

    // click nav-item scroll and off menu
    const navItems = document.querySelectorAll(".nav-item-link")
    if (navItems) {
        navItems.forEach(navItem => {
            navItem.onclick = (e) => {
                const subNav = document.querySelector(".subnav");
                const isSubMenu = navItem.nextElementSibling && subNav;
                if (isSubMenu) {
                    e.preventDefault();
                } else {
                    header.style.height = null;
                }
            }
        })

    }
}
handleClickMenuItemMoblile();


function handleShowSlides() {

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.querySelectorAll(".slide-item");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        dots[0].onclick = () => currentSlide(1)
        dots[1].onclick = () => currentSlide(2)
        dots[2].onclick = () => currentSlide(3)
    }

    $(".slide-prev").onclick = () => plusSlides(-1);
    $(".slide-next").onclick = () => plusSlides(1);

}
handleShowSlides()



function handleScroll() {
    const btnScrollTop = $(".btn-scroll-top");
    window.onscroll = () => {
        if (window.scrollY >= 800) {
            btnScrollTop.style.display = "block"
        } else {
            btnScrollTop.style.display = "none"
        }
    }

    btnScrollTop.onclick = () => window.scroll({ top: 0, behavior: "smooth" });

}
handleScroll()

