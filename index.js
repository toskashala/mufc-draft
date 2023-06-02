document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });
});
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
item.addEventListener('click', hideMenu);
});

function hideMenu() {
const menu = document.querySelector('.menu');
menu.classList.remove('active');
}



document.addEventListener('DOMContentLoaded', function() {
  const colorPicker = document.getElementById('color');
  const patternSelect = document.getElementById('pattern');
  const logoSelect = document.getElementById('logoSelect');
  const kitElement = document.getElementById('kit');
  const sleeveElement = document.getElementById('sleeve');
  const sleeveElement2 = document.getElementById('sleeve2');
  const logoElement = document.getElementById('logo');
  const sponsorElement = document.getElementById('sponsor');

  // Update kit color when color picker value changes
  colorPicker.addEventListener('change', function() {
    kitElement.style.backgroundColor = colorPicker.value;
    sleeveElement.style.backgroundColor = colorPicker.value;
    sleeveElement2.style.backgroundColor = colorPicker.value;
  });

  // Update kit pattern when pattern select value changes
  patternSelect.addEventListener('change', function() {
    const pattern = patternSelect.value;
    if (pattern === 'stripes') {
      kitElement.classList.add('stripes');
    } else {
      kitElement.classList.remove('stripes');
    }
  });

  // Update kit logo when logo select value changes
  logoSelect.addEventListener('change', function() {
    const logo = logoSelect.value;
    logoElement.classList.remove('logo1', 'logo2', 'logo3'); // Remove existing logo classes
    if (logo !== 'none') {
      logoElement.classList.add(logo);
    }
  });
  sponsorSelect.addEventListener('change', function() {
    const sponsor = sponsorSelect.value;
    sponsorElement.classList.remove('sponsor1', 'sponsor2', 'sponsor3'); // Remove existing logo classes
    if (sponsor !== 'none') {
      sponsorElement.classList.add(sponsor);
    }
  });
});
