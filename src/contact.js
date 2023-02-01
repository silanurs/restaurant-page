export default function createContact() {
    const container = document.querySelector('#content');
    const contactdiv = document.createElement('div');
    contactdiv.classList.add('contactdiv')
   
    const telephone = document.createElement('p');
    telephone.textContent = '📞 123 456 789';
    const address = document.createElement('p');
    address.textContent = '🏠 14216 230th PlSpringfield Gardens, New York(NY), 11413';
    const location= document.createElement('img');
    location.src='imgs/location.png';
    const imgdiv = document.createElement('div');
    imgdiv.classList.add('imgcontact');
    imgdiv.append(location)
    contactdiv.append(telephone, address, imgdiv);
    container.append(contactdiv);
    return container;

}