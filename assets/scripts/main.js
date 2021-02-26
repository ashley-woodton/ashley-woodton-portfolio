//Mobile Menu
const navMenu = document.getElementById('menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})


const navLink = document.querySelectorAll('.nav_link')


navLink.forEach(n=>n.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
}))

//section scroll
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}