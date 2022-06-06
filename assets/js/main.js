function handleBtnBuyTickets() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);


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
