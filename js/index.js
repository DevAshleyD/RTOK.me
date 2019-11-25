(function () {

  var appModule = {
    elements: {
      page: $('#page'),
      carousel: $('.screen-portfolio__carousel'),
      navigation: document.getElementById('navigation'),
      toggle: document.getElementById('toggle'),
    },
    init() {
      this.applyFullPageScrolling();
      this.initCarousel();
      this.bindEvents();
    },
    bindEvents() {
      this.elements.navigation.addEventListener('click', this.hideMenuIfOpened.bind(this));
      this.elements.toggle.addEventListener('click', this.toggleMenu.bind(this))
    },
    applyFullPageScrolling() {
      this.elements.page.fullpage({
        //Navigation
        menu: '#navigation',
        anchors: ['home', 'blog', 'portfolio', 'contact' ],
        //Scrolling
        normalScrollElements: '.article',
        //Design
        fixedElements: '#header',
        //Events
      });
    },
    initCarousel() {
      this.elements.carousel.slick({
        appendArrows: $('.screen-portfolio__arrows'),
        appendDots: $('.screen-portfolio__dots'),
        mobileFirst: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        rows: 1,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "dots",
        prevArrow: "<div class='arrows__arrow arrows__arrow--left'></div>",
        nextArrow: "<div class='arrows__arrow arrows__arrow--right'></div>",
        responsive: [
          {
            breakpoint: 480,
            settings: {
            }
          },
          {
            breakpoint: 768,
            settings: {
              fade: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              rows: 1
            }
          },
					{
            breakpoint: 1200,
            settings: {
              fade: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              rows: 1
            }
          }
        ]
      });
    },
    toggleMenu() {
      this.elements.navigation.classList.toggle('navigation--visible');
    },
    hideMenuIfOpened() {
      this.elements.navigation.classList.remove('navigation--visible');
    }
  };

  appModule.init();

})();