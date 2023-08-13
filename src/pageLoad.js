import './style.css';
import createHome from './components/home';
import createMenu from './components/menu';
import createContact from './components/contact';

const home = new createHome();
const menu = new createMenu();
const contact = new createContact();

export default function pageLoad() {
    const content = document.getElementById('content');
    content.appendChild(home)
    content.appendChild(menu)
    content.appendChild(contact)
}