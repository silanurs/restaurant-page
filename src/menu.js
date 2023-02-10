export default function createMenu(){
    const container = document.querySelector('#content');
    const menu = document.querySelector('.menu');
    container.classList.add('active-menu')
    container.classList.remove('active-about')
    menu.removeEventListener('click', createMenu)
    const gridcontainer = document.createElement('div');
    gridcontainer.classList.add('grid');
    const menudiv = document.createElement('div');
    menudiv.classList.toggle('menudiv');
    const menuItems = ["imgs/shish-kebab.jpg", "imgs/iskender.jpg", "imgs/doner-kebab.jpg", "imgs/eggplant-kebab.jpg", "imgs/meat.jpg", 
"imgs/beef.jpg", "imgs/salad.jpg", "imgs/baklava.jpg"];
    const names = ["Shish Kebab", "Iskender Kebab", "Doner Kebab", "Eggplant Kebab", "Tomahawk", "New York Steak", "Salad", "Baklava"];
    const item = document.createElement('div'); 
    const food = document.createElement('img'); 
    const caption= document.createElement('p');
    caption.classList.add('caption');
    food.src = menuItems[0];
    caption.textContent= names[0];
    item.append(food, caption);
    menudiv.append(item);
    const item1 = document.createElement('div'); 
    const food1 = document.createElement('img'); 
    const caption1= document.createElement('p');
    caption1.classList.add('caption');
    food1.src = menuItems[1];
    caption1.textContent= names[1];
    item1.append(food1, caption1);
    menudiv.append(item1);
    const item2 = document.createElement('div'); 
    const food2 = document.createElement('img'); 
    const caption2= document.createElement('p');
    caption2.classList.add('caption');
    food2.src = menuItems[2];
    caption2.textContent= names[2];
    item2.append(food2, caption2);
    menudiv.append(item2);
    const item3 = document.createElement('div'); 
    const food3 = document.createElement('img'); 
    const caption3= document.createElement('p');
    caption3.classList.add('caption');
    food3.src = menuItems[3];
    caption3.textContent= names[3];
    item3.append(food3, caption3);
    menudiv.append(item3);
    const item4 = document.createElement('div'); 
    const food4 = document.createElement('img'); 
    const caption4= document.createElement('p');
    caption4.classList.add('caption');
    food4.src = menuItems[4];
    caption4.textContent= names[4];
    item4.append(food4, caption4);
    menudiv.append(item4);
    const item5 = document.createElement('div'); 
    const food5 = document.createElement('img'); 
    const caption5= document.createElement('p');
    caption5.classList.add('caption');
    food5.src = menuItems[5];
    caption5.textContent= names[5];
    item5.append(food5, caption5);
    menudiv.append(item5);
    const item6 = document.createElement('div'); 
    const food6 = document.createElement('img'); 
    const caption6= document.createElement('p');
    caption6.classList.add('caption');
    food6.src = menuItems[6];
    caption6.textContent= names[6];
    item6.append(food6, caption6);
    menudiv.append(item6);
    const item7 = document.createElement('div'); 
    const food7 = document.createElement('img'); 
    const caption7= document.createElement('p');
    caption7.classList.add('caption');
    food7.src = menuItems[7];
    caption7.textContent= names[7];
    item7.append(food7, caption7);
    menudiv.append(item7);

   gridcontainer.appendChild(menudiv)

container.appendChild(gridcontainer);


return container;

   } 
   
