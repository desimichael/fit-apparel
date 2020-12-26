/*JUMBO ANIMATION */
let jumboTL = gsap.timeline();

jumboTL.fromTo(
  '#jumbo .transparent-color',
  {
    opacity: 1,
    backgroundColor: "black"
  },
  {
    opacity: .5,
    duration: 2
  }
)
  .fromTo(
    '.logo',
    {
      x: -200,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3
    }
  )
  .fromTo(
    '.menu',
    {
      x: 200,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3
    },
    '>-1.3'
  )
  .fromTo(
    '#jumbo .titles h1',
    {
      x: 0,
      opacity: 0
    },
    {
      x: 100,
      opacity: 1,
      duration: 1
    },
    '>-.3'
  )
  .fromTo(
    '#jumbo .titles h2',
    {
      x: 0,
      opacity: 0
    },
    {
      x: 100,
      opacity: 1,
      duration: 1
    },
    '>-.7'
  )
  .fromTo(
    '#jumbo .state',
    {
      x: '100%'
    },
    {
      x: 0,
      duration: 1
    }
  )
  .fromTo(
    '#jumbo .store-info',
    {
      y: '100%'
    },
    {
      y: 0,
      duration: 1
    },
    '>-1.8'
  )
  .fromTo(
    '#jumbo .store-info img',
    {
      y: 400,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: .2
    },
    '>-1.8'
  )

/*TWO COLLECTION SECTION */
const twoCollectionTL = gsap.timeline();

twoCollectionTL.fromTo(
  '#twoCollections .col-md-6',
  {
    y: 300,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1
  }
)
  .fromTo(
    '#twoCollections .left-c span',
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1
    },
  )
  .fromTo(
    '#twoCollections .right-c span',
    {
      y: 300,
      opacity: 0
    },
    {
      y: -100,
      opacity: 1,
      duration: 1
    },
    '>-.8'
  )

/*SCROLL ANIMATION */
let homeController = new ScrollMagic.Controller();

let twoCollscene = new ScrollMagic.Scene({
  triggerElement: '#twoCollections',
  triggerHook: 1,
  reverse: false,
  offset: 100,
  duration: 0,
  // duration: document.querySelector('#twoCollections').offsetHeight
})
  .setTween(twoCollectionTL)
  .addIndicators()
  .addTo(homeController)


/*HEADER ANIMATION */
const headerTL = gsap.timeline();

headerTL.fromTo(
  'header',
  {
    backgroundColor: "rgba(0,0,0,0)"
  },
  {
    backgroundColor: "rgba(0,0,0,1)",
    duration: .4
  },
  '>-.4'
)
  .fromTo(
    'header .logo a',
    {
      scale: 1
    },
    {
      scale: .8,
      duration: .5
    }
  );
let headerScene = new ScrollMagic.Scene({
  triggerElement: '#jumbo',
  triggerHook: 1,
  reverse: true,
  offset: (document.querySelector('#jumbo').offsetHeight) + 100,
  duration: 0,
  // duration: document.querySelector('#twoCollections').offsetHeight
})
  .setTween(headerTL)
  .addIndicators()
  .addTo(homeController)