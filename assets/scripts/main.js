//Mobile Menu
const navMenu = document.getElementById('menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.add('show');
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})


const navLink = document.querySelectorAll('.nav_link')


navLink.forEach(n=>n.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
}))

//section scroll
const section = document.querySelectorAll('section[id]');
window.addEventListener('scroll', activateScroll)

const activateScroll = () => {
    const scroll = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionID = current.getAttribute('id');

        if(scroll > sectionTop && scroll <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href='+ sectionID+']').classList.add('active');
        }else{
            document.querySelector('.menu a[href='+ sectionID+']').classList.remove ('active');
        }
    })

window.addEventListener('scroll', activateScroll)
}