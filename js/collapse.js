const logoBtn = document.getElementById('logo');
const sidebarCol = document.querySelector('.sidebar');
const navText = document.querySelectorAll('.nav-text');
const navs = document.querySelector('.navs');
const settingsWrapper = document.getElementById('settingsWrapper');
const section = document.querySelectorAll('.main-section');

logoBtn.addEventListener('click', () => {
  const isCollapsed = sidebarCol.classList.toggle('collapse');

  logoBtn.style.height = isCollapsed ? "80px" : "150px";
  navs.style.marginTop = isCollapsed ? "2rem" : "0";

  navText.forEach(text => {
    text.style.display = isCollapsed ? "none" : "block";
  });
    
  section.forEach(sctn => {
    sctn.style.marginLeft = isCollapsed ? "4.8rem":"19rem";
    
  });

  if (settingsWrapper.classList.contains('show')) {
    settingsWrapper.style.width = isCollapsed ? '10rem' : '100%';
    settingsWrapper.style.top = isCollapsed ? '0' : '3.4rem';
    settingsWrapper.style.left = isCollapsed ? '100%' : '0';
  }
});
