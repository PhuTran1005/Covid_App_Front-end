function changeList(tabitem, element) {
    let tabs = document.getElementsByClassName('tabitem');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.borderLeft = 'groove';
    }
    element.style.borderLeft = '4px solid red';
    
    if(tabitem == 'create_ct') {
        document.getElementById('1').style.display = 'block';
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = 'none';
        document.getElementById('4').style.display = 'none';    
    }
    if(tabitem == 'update_ct') {
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'block';
        document.getElementById('3').style.display = 'none'; 
        document.getElementById('4').style.display = 'none';    
    }
    if(tabitem == 'refer_ct') {
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = 'block';
        document.getElementById('4').style.display = 'none';    
    }
    if(tabitem == 'delete_ct') {
        document.getElementById('1').style.display = 'none';
        document.getElementById('2').style.display = 'none';
        document.getElementById('3').style.display = 'none'; 
        document.getElementById('4').style.display = 'block';    
    }
    
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
