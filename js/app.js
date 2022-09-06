const toggle = document.querySelector(".btn__toggle");
const nav = document.querySelector(".header__nav");
const fixed = document.querySelector(".fixed-header");
const section = document.querySelectorAll("section");
let menu = true
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
  console.log(toggle.innerHTML);
  document.body.classList.toggle("active");
  if(menu){
    toggle.innerHTML = `<i class='bx bx-x'></i>`
    menu = false
  }else{
    toggle.innerHTML = `<i class='bx bx-menu'></i>`
    menu = true
  }
});

for (let s = 0; s < section.length; s++) {
  section[s].addEventListener('click',function(){
  nav.classList.remove("active");
  toggle.innerHTML = `<i class='bx bx-menu'></i>`
  menu = true
  })
}
window.addEventListener('scroll', ()=>{
  if(window.scrollY > 50){
    fixed.classList.add('shadow')
  }else{
    fixed.classList.remove('shadow')
  }
})

const navHeight = fixed.offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',navHeight + 1 + 'px')

