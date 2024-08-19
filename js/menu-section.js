const menu_section = document.querySelector('.menu-section');
const burger_btn = document.querySelector('.header-menu-list__burger');
let flag = false;


burger_btn.addEventListener('click', () => {
    if (flag =! flag) {
        menu_section.classList.remove('hidden');
        menu_section.classList.add('visible');
    }
    else {
        menu_section.classList.remove('visible');
        menu_section.classList.add('hidden');
    }
});

document.addEventListener('click', (e)=>{
    const flagPage = e.composedPath().includes(burger_btn);
	if (!flagPage) {
        menu_section.classList.remove('visible');
        menu_section.classList.add('hidden');
        flag = false;
	}
});