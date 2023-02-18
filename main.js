/*====== change background header ======*/

const scrollHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  };
  window.addEventListener("scroll", scrollHeader);
  
  /*====== swiper products ======*/
  
  let swiperProducts = new Swiper(".product-container", {
    spaceBetween: 32,
    grabCursor: true,
    centredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 72,
      },
    },
  });

  /*====== scroll section active link ======*/

  const sections = document.querySelectorAll("section[id]")

  const scrollActive = ()=>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]")
      
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionsClass.classList.add("active-link")
      }else{
        sectionsClass.classList.remove("active-link")
      }      
    })
  }
  window.addEventListener("scroll", scrollActive)

  
  /*========== dark light theme ========*/
  
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line" 

if(selectedTheme){
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", ()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

  /*========== scroll reveal animation ========*/
  