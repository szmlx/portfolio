const isMobile = window.matchMedia("(max-width: 768px)").matches;

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1000,
  delay: 400,
  viewOffset: {
    bottom: isMobile ? -200 : 0,
  },
});
// ScrollReveal().reveal('.scroll-arrow-container', { delay: 2800, interval:100,distance:'0px' });

ScrollReveal().reveal(".card-content .title", {
  delay: 100,
  interval: 140,
  origin: "top",
  distance: "20px",
  viewOffset: {
    bottom: 0,
  },
});
ScrollReveal().reveal(".card-content .pfp", {
  delay: 200,
  interval: 140,
  origin: "left",
  distance: "40px",
  viewOffset: {
    bottom: 0,
  },
});
ScrollReveal().reveal(".card-content .content", {
  delay: 350,
  interval: 140,
  origin: "right",
  distance: "40px",
  viewOffset: {
    bottom: 0,
  },
});

ScrollReveal().reveal(".skill", {
  delay: 100,
  interval: 140,
  viewOffset: { bottom: 0 },
});
ScrollReveal().reveal(".animation", {
  delay: 20,
  viewOffset: { bottom: isMobile ? -200 : 0 },
});
ScrollReveal().reveal(".box", {
  delay: 0,
  interval: isMobile ? 0 : 100,
  origin: isMobile ? "right" : "bottom",
  viewOffset: { bottom: isMobile ? -300 : -200 },
});
