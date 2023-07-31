document.addEventListener("mousemove", mouseMoveFunc);

let imglayers_s1 = gsap.utils.toArray(".imagelayerframe-1 .mouseparallax");
let imglayers_s2 = gsap.utils.toArray(".imagelayerframe-2 .mouseparallax");
let imglayers_s3 = gsap.utils.toArray(".imagelayerframe-3 .mouseparallax");


function mouseMoveFunc(e) {


  imglayers_s1.forEach((imglayer, index) => {
    const depth = 30;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    index ++

    gsap.to(imglayer, {
      x: moveX * index,
      y: moveY * index,
    });
  });

  imglayers_s2.forEach((imglayer, index) => {
    const depth = 30;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    index ++

    gsap.to(imglayer, {
      x: moveX * index,
      y: moveY * index,
    });
  });

  imglayers_s3.forEach((imglayer, index) => {
    const depth = 30;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    index ++

    gsap.to(imglayer, {
      x: moveX * index,
      y: moveY * index,
    });
  });

  textparallax.forEach((imglayer, index) => {
    const depth = 60;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    index ++

    gsap.to(imglayer, {
      x: moveX * index,
      y: moveY * index,
    });
  });

}


gsap.set(".imagelayerframe-1 .imagewrapper, .imagelayerframe-2 .imagewrapper, .imagelayerframe-3 .imagewrapper",{opacity:0, x:-30})

gsap.timeline({repeat: -1}).to(".imagelayerframe-1 .imagewrapper",{opacity:1, x:0, stagger:0.1, duration:.6, ease:Circ.easeInOut})
               .to(".imagelayerframe-1 .imagewrapper",{opacity:0, x:60, stagger:0.1, duration:.6, ease:Circ.easeInOut}, "+=5")
               .to(".imagelayerframe-2 .imagewrapper",{opacity:1, x:0, stagger:0.1, duration:.6, ease:Circ.easeInOut}, "-=.3")
               .to(".imagelayerframe-2 .imagewrapper",{opacity:0, x:60, stagger:0.1, duration:.6, ease:Circ.easeInOut}, "+=5")
               .to(".imagelayerframe-3 .imagewrapper",{opacity:1, x:0, stagger:0.1, duration:.6, ease:Circ.easeInOut}, "-=.3")
               .to(".imagelayerframe-3 .imagewrapper",{opacity:0, x:60, stagger:0.1, duration:.6, ease:Circ.easeInOut}, "+=5")

gsap.timeline().from(".text-wrap h1 span",{y:100, opacity:0, duration:.6, stagger:0.15, ease:Circ.easeOut})
              .from(".text-wrap .ts-button",{y:30, opacity:0, duration:.6, stagger:0.15, ease:Circ.easeOut}, "-=.5")
              .from(".text-wrap .underline",{x:-60, opacity:0, duration:.6, ease:Circ.easeOut})
