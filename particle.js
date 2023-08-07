particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: { enable: false, value_area: 490.42045380239307 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.1552998103707578,
        random: false,
        anim: { enable: false, speed: 2, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 1.2,
        random: false,
        anim: {
          enable: false,
          speed: 12.420714439494551,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: true,
        out_mode: "bounce",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "bubble" },
        resize: true
      },
      modes: {
        grab: {
          distance: 317.71894093686353,
          line_linked: { opacity: 0.09903277985013037 }
        },
        bubble: {
          distance: 0,
          size: 32.586558044806516,
          duration: 2,
          opacity: 1,
          speed: 3
        },
        repulse: { distance: 228.10590631364565, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: false
  });
  var count_particles, stats, update;
  stats = new stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
  