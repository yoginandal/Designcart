

///////////////////////////////////particles//////////////////////
window.onload = function () {
  Particles.init({
    selector: ".particles"
  });
};
const particles = Particles.init({
  selector: ".particles",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
      color: ["#faebd7", "#03dac6", "#ff0266"],
       maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

//cursor//
const cursor = document.querySelector("div.cursor");

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let cursor_speed = 0.1;


function animate(){
  
  let distX = mouseX - cursorX;
  let distY = mouseY - cursorY;
  
  
  cursorX = cursorX + (distX * cursor_speed);
  cursorY = cursorY + (distY * cursor_speed);
  
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  
  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function(event){
  mouseX = event.pageX;
  mouseY = event.pageY;
})

////////////////for nav hover////////////////
let links = Array.from(document.querySelectorAll(".menu_name"));

console.log(links);

links.forEach((links) => {
  links.addEventListener("mouseover", () => {
    cursor.classList.add("grow");
  });

  links.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
  });
});

/////for horizontal-scroll hover////////
let inner_img = Array.from(document.querySelectorAll(".gallary"));

console.log(inner_img);

inner_img.forEach((inner_img) => {
  inner_img.addEventListener("mouseover", () => {
    cursor.classList.add("grow-horizontal-scroll");
  });
inner_img.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow-horizontal-scroll");
  });

});

/////for testimonial hover////////
let test_slider = Array.from(document.querySelectorAll("#testimonial_slider label"));

console.log(test_slider);

test_slider.forEach((test_slider) => {
  test_slider.addEventListener("mouseover", () => {
    cursor.classList.add("cursor_testimonial");
  });
  test_slider.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor_testimonial");
  });

});



////////////////////////////////////////////////////////////////////////////
//Text Change//

var example = ['DEVELOPERS', 'DESIGNERS', 'DIGITAL MARKETERS'];

textSequence(0);
function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
        }, 1000); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

};

/////////////////////////////////////////////////////////////////////////
//text animation//
var words = ['style','emotion','pride'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    document.getElementById('word').innerText = part;
  },speed);
};

document.addEventListener('DOMContentLoaded', function() {
  wordflick();
});


///////////////////////text-change(AboutUs)/////////////////
var word = ['Design Agency','Development Agency','Branding and Marketing Agency'],
    parts,
    j = 0,
    offsets = 0,
    lenn = word.length,
    forward = true,
    skip_counts = 0,
    skip_delays = 15,
    speeds = 70;
var wordflicks = function () {
  setInterval(function () {
    if (forward) {
      if (offsets >= word[j].length) {
        ++skip_counts;
        if (skip_counts == skip_delays) {
          forward = false;
          skip_counts = 0;
        }
      }
    }
    else {
      if (offsets == 0) {
        forward = true;
        j++;
        offsets = 0;
        if (j >= lenn) {
          j = 0;
        }
      }
    }
    parts = word[j].substring(0, offsets);
    if (skip_counts == 0) {
      if (forward) {
        offsets++;
      }
      else {
        offsets--;
      }
    }
    document.getElementById('AboutUs').innerText = parts;
  },speeds);
};

document.addEventListener('DOMContentLoaded', function() {
  wordflicks();
});

///////////////////////text-change(Web Development)/////////////////
var word_web = ['Responsive Websites','Stunning Designs','Staggring use of images'],
    parts_web,
    k = 0,
    offsets_web = 0,
    len_web = word_web.length,
    forward_web = true,
    skip_counts_web = 0,
    skip_delays_web = 15,
    speeds_web = 70;
var wordflicks_web = function () {
  setInterval(function () {
    if (forward_web) {
      if (offsets_web >= word_web[k].length) {
        ++skip_counts_web;
        if (skip_counts_web == skip_delays_web) {
          forward_web = false;
          skip_counts_web = 0;
        }
      }
    }
    else {
      if (offsets_web == 0) {
        forward_web = true;
        k++;
        offsets_web = 0;
        if (k >= len_web) {
          k = 0;
        }
      }
    }
    parts_web = word_web[k].substring(0, offsets_web);
    if (skip_counts_web == 0) {
      if (forward_web) {
        offsets_web++;
      }
      else {
        offsets_web--;
      }
    }
    document.getElementById('web_development').innerText = parts_web;
  },speeds_web);
};

document.addEventListener('DOMContentLoaded', function() {
  wordflicks_web();
});


//////////////////////Navigation////////////////////////////////////


var app = function () {
  var body = undefined;
  var menu = undefined;
  var menuItems = undefined;
  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    applyListeners();
  };
  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'nav-active');
    });
  };
  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();



/////////////////////////////////////Horizontal scroll gallary///////////////
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

/////////////////////////////workplace//////////////////////////

    
var tl = new TimelineMax();
var bgd = $('#background rect');
var table = $('#table_legs, #table');
var lampLeg = $('#lamp > .lamp-leg');
var lampbt = $('#lamp-bottom');
var lampLight = $('#lamp > .light');
var lampLine = $('#lamp-line');
var lampLineB = $('#lamp-line-b');
var lampLineT = $('#lamp-line-t');
var lampCircle = $('#lamp-circle');
var lampHead = $('#lamp-head');
var lampHeader = $('#lamp-header');
var lampBody = $('#lamp-body');
var computer = $('#computer > *');
var keyboard = $('#keyboard > *');
var asset = $('#computer_mouse > * , #coffee_mug > *');

tl.from(bgd, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
	.staggerFrom(table, 0.2, {y:"-=200", opacity: 0, ease: Elastic.easeOut}, 0.1)
	.from(lampLeg, 0.2, {opacity:0, x: "-200", ease: Elastic.easeOut})
	.from(lampbt, 0.2, {opacity:0, scale:0, transformOrigin: 'center center'})
	.from(lampLineB, 0.3,{opacity:0, transformOrigin: '100% 100%', rotation: '-180deg'})
	.from(lampCircle,0.1,{opacity:0, x: '-=100', y: '-=100'})
  .from(lampLineT, 0.3,{opacity:0, transformOrigin: '0% 100%', rotation: '-180deg'})
	.from(lampHead, 0.2, {opacity:0, scale:0, ease: Elastic.easeOut})
	.from(lampHeader, 0.5, {transformOrigin: '60% 60%', rotation: '60deg'})
	.from(lampBody, 0.5, {transformOrigin: '70% 70%', rotation: '-25deg'})
	.staggerFrom(computer, 1, {opacity: 0, scale: 0, transformOrigin: 'center center', ease: Back .easeOut}, 0.2)
	.staggerFrom(keyboard, 0.5, {opacity: 0, y: '-=100', ease: Linear.easeInOut }, 0.05)
	.staggerFrom(asset, 0.5, {opacity: 0}, 0.05)
	.to(lampLight, 0.2, {opacity:0.8, ease: Elastic.easeOut, delay:0.5}, "a")
  .to(lampLight, 0.1, {opacity:0}, "b")
  .to(lampLight, 0.1, {opacity:0.2}, "c")
	.to(bgd, 0.2, {opacity: 0.1, delay:0.5}, "a-=0.05")
	.to(bgd, 0.1, {opacity: 1}, "b-=0.05")
	.to(bgd, 0.1, {opacity: 0.5}, "c-=0.05")
	.to(bgd, 0.2, {opacity: 1, fill: '#ffbc01'})
	.fromTo(lampLine, 0.2, {opacity: 0},{opacity: 0.2, delay:0.5}, "a-=0.05")
	.to(lampLine, 0.1, {opacity: 1}, "b-=0.05")
	.to(lampLine, 0.1, {opacity: 0.5}, "c-=0.05");