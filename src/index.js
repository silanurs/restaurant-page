import createMenu from './menu.js'
import createAbout from './about.js'
import createContact from './contact.js'
function createHeader(){
 
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const about = document.createElement('p');
    about.classList.add('about');
    about.textContent = "About";
    const menu = document.createElement('p');
    menu.classList.add('menu');
    menu.textContent = "Menu";
    const contact = document.createElement('p');
    contact.classList.add('contact');
    contact.textContent = "Contact";
    nav.append(about, menu, contact);
    header.append(nav);
   
    
    about.addEventListener('click', ()=> { 
    
        clearContent();
        createAbout();});
    menu.addEventListener('click', () => {
        
        clearContent();
        createMenu();});
    contact.addEventListener('click', () => {
        clearContent();
        createContact();
    });    
   
    
   return header;

}
function clearContent() {
  const container = document.querySelector('#content');
  container.innerHTML = '';
}

document.body.appendChild(createHeader());
document.body.appendChild(createAbout());
