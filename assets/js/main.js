function handleBtnBuyTickets() {
    const tourBuyBtn = document.querySelectorAll(".tour-buy-btn");
    const modalCotainer = document.querySelector('.modal-container');
    const modal = document.querySelector(".modal");
    if (tourBuyBtn) {
        tourBuyBtn.forEach(buyBtn => {
            buyBtn.onclick = function () {
                if (modal) {
                    modal.classList.add("open");
                    modalCotainer.style.animation = "modalShownTopCenter ease 0.6s ";
                    if (modal.classList.contains("remove")) {
                        modal.classList.remove("remove");
                    }
                }
            }
        })

        const modalCloseBtn = document.querySelector(".modal-close");
        if (modalCloseBtn) {
            modalCloseBtn.onclick = function () {
                modalCotainer.style.animation = "modalOff ease 0.8s";
                setTimeout(() => {
                    const inputModalTickets = document.querySelector(".form-input");
                    inputModalTickets.value = "";
                    if (modal.classList.contains("open")) {
                        modal.classList.remove("open");
                        modal.classList.add("remove");
                    }
                }, 300)
            }
        }
    }


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
