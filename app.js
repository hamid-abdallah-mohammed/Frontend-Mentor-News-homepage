// html required elements
const menu = document.querySelector('.menu');
const linksContainer = document.querySelector('.links__container'),
      closeMenu = document.querySelector('.close_btn');


      menu.addEventListener('click', () => {
          linksContainer.style.right = '0px'
          document.body.classList.add('overall')
      })

      closeMenu.addEventListener('click', () => {
        linksContainer.style.right = '-800px'
        document.body.classList.remove('overall')
    })

    const links = Array.from(document.querySelectorAll('.link'));

 
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            linksContainer.style.right = '-800px';
            document.body.classList.remove('overall');
        })
    })

    

    