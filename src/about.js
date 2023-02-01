export default function createAbout(){
    const container = document.querySelector('#content');
   
    const about = document.querySelector('.about');
    
    container.classList.add('active-about');
    about.removeEventListener('click', createAbout);
    const description = document.createElement('div');
    description.classList.add('description');
    const chefimg = document.createElement('img');
    chefimg.classList.add('chef');
    chefimg.src = "imgs/chef.jpg";
    const since = document.createElement('p');
    since.textContent = "The Indispensable Address Of Meat For 16 Years"
    description.append(since, chefimg);

    const pcontainer = document.createElement('div');
    const div = document.createElement('div');
    div.classList.add('aboutdiv');
    const img = document.createElement('img');
    img.src= "imgs/grill.jpg";
    const para = document.createElement('p');
    para.textContent = 'One and Only';
    const para1 = document.createElement('p');
    para1.textContent = 'You will taste an exquisite menu';
    
    const para2 =document.createElement('p');
    para2.textContent = "You will be overwhelmed with fantastic smells";
    
    const para3 = document.createElement('p');
    para3.textContent = "Everything you touch will be enchanting";
    const para4 = document.createElement('p');
    para4.textContent = "Everything you hear will be fascinating";
    const para5 = document.createElement('p');
    para5.textContent="You will see glorious people, delightful presentations and incredible shows"
    const para6 = document.createElement('p');
    para6.textContent = "Be entertained, amused, and pampered"
    const para7 = document.createElement('p');
    para7.textContent ="Experience luxury dining like never before";
    const para8 = document.createElement('p');
    para8.textContent = "Guaranteed...";
    const para9 = document.createElement('p');
    para9.textContent = "All your senses will be fully satisfied"
    
    
    

 
pcontainer.append(para, para1, para2, para3, para4, para5, para6, para7, para8, para9, );

div.append(pcontainer, img)
container.append(description, div);
return container;


 


}