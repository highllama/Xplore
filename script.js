const headerButton = document.getElementById('headerButton');
const headerLinks = document.querySelector('.headerLinks');
const header =document.querySelector('header');


headerButton.addEventListener('click', () => {
  headerLinks.classList.toggle('active') 
  
});

window.addEventListener('scroll', () => {
  
  if (window.scrollY > 80) {
    header.classList.add("sticky")
  }
  else
    header.classList.remove("sticky")
})

//if (window.scrollY > ) {
 
//}

