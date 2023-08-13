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
        navItems.forEach(li => {
            li.classList.remove('nav-active')
        })
        e.target.classList.add('nav-active')
    }

    const targetTab = e.target.dataset.tab;

    tabs.forEach(tab => {
        // remove active class from all the elements in the array
        tab.classList.add("hidden");
        
        if (tab.classList.contains(targetTab)) {
            tab.classList.remove('hidden');
        }
    })
})