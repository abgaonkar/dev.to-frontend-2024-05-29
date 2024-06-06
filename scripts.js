document.addEventListener('DOMContentLoaded', function () {
  var elementsToReveal = document.querySelectorAll('section, li');

  function revealElement() {
    elementsToReveal.forEach(function (section) {
      var elementPosition = section.getBoundingClientRect().top;
      var screenPosition = window.innerHeight;

      if (elementPosition < screenPosition / 1.2) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealElement);
  revealElement();

  const liElements = document.querySelectorAll('li > h3 + p');
  const imageUrls = [
    'https://whitehaven-beach.com/wp-content/uploads/2022/07/Hill-Inlet-Whitehaven-Beach-Queensland.jpg',
    'https://www.visittci.com/thing/grace-bay-beach-pr/aerial_2048x1365.jpg',
    'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/159000/159817-Sancho-Beach.jpg',
    'https://mybestplace.com/uploads/2022/05/Navagio-Beach-Zante-Grecia-COVER.jpg',
    'https://mediaim.expedia.com/destination/1/ef093aa90579bce0b7294e09fea9ede2.jpg',
    'https://www.jonnymelon.com/wp-content/uploads/2022/01/La-Digue-Seychelles-108-1536x1023.jpg',
    'https://caymanreefresortvacationrentals.com/wp-content/uploads/2023/01/Seven-Mile-Beach-min-1536x1058.jpg',
    'https://www.tahiti.com/images1/thumbs/conrad-bora-bora-nui-aerial-1200x720.jpg',
    'https://windows10spotlight.com/wp-content/uploads/2022/09/22a2c3ec81ae640359441e79ab71ab47-1024x576.jpg',
    'https://www.pandotrip.com/wp-content/uploads/2015/05/Pink-Sand4-980x651.jpg',
  ];

  liElements.forEach(function (li, ind) {
    const backgroundImageUrl = `url(${imageUrls[ind]})`;
    li.parentElement.style.backgroundImage = backgroundImageUrl;
    li.parentElement.style.backgroundSize = 'cover';
    li.parentElement.style.backgroundPosition = 'center';
  });
});
