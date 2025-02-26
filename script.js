const burgerMenu = document.querySelector('.ham-menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation ul li a');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navigation.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    navigation.classList.remove('active');
  });
});


document.addEventListener('scroll', function() {
  const aboutSection = document.querySelector('.about-container');
  const position = aboutSection.getBoundingClientRect();

  // Check if the element is in the viewport
  if (position.top < window.innerHeight && position.bottom >= 0) {
    aboutSection.classList.add('visible');
  }
});
document.addEventListener('scroll', function() {
  const aboutSection = document.querySelector('.list-container');
  const position = aboutSection.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    aboutSection.classList.add('visible');
  }
});

document.querySelectorAll('.qual-button').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const listContent = document.getElementById(targetId);
    if (listContent.style.display === 'none' || listContent.style.display === '') {
      listContent.style.display = 'block'; 
    } else {
      listContent.style.display = 'none'; 
    }
  });
});