import './style.css';

const navList = document.querySelector('.nav-list')
const navItems = document.querySelectorAll('.nav-list li')
const tabs = document.querySelectorAll(".tab")

console.log(navItems)

// tab.forEach(element => {
    
// });

navList.addEventListener('click', (e) => {
    if (!e.target.dataset.tab) return;
    
    if (!e.target.classList.contains('nav-active')) {
        Array.from(navItems).forEach(li => {
            li.classList.remove('nav-active')
        })
        e.target.classList.add('nav-active')
    }

    const targetTab = e.target.dataset.tab;
    console.log(targetTab);
})