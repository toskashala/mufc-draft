// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the menu toggle element
  var menuToggle = document.querySelector('.menu-toggle');
  // Select the menu element
  var menu = document.querySelector('.menu');

  // Add a click event listener to the menu toggle
  menuToggle.addEventListener('click', function() {
    // Toggle the "active" class on the menu
    menu.classList.toggle('active');
  });
});

// Select all the anchor elements within menu list items
const menuItems = document.querySelectorAll('.menu li a');

// Add click event listeners to each menu item
menuItems.forEach(item => {
  item.addEventListener('click', hideMenu);
});

// Function to hide the menu
function hideMenu() {
  // Select the menu element
  const menu = document.querySelector('.menu');
  // Remove the "active" class from the menu
  menu.classList.remove('active');
}

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select the color picker, pattern select, logo select, and various kit elements
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
    // Set the background color of the kit elements to the selected color
    kitElement.style.backgroundColor = colorPicker.value;
    sleeveElement.style.backgroundColor = colorPicker.value;
    sleeveElement2.style.backgroundColor = colorPicker.value;
  });

  // Update kit pattern when pattern select value changes
  patternSelect.addEventListener('change', function() {
    const pattern = patternSelect.value;
    if (pattern === 'stripes') {
      // Add the "stripes" class to the kit element
      kitElement.classList.add('stripes');
    } else {
      // Remove the "stripes" class from the kit element
      kitElement.classList.remove('stripes');
    }
  });

  // Update kit logo when logo select value changes
  logoSelect.addEventListener('change', function() {
    const logo = logoSelect.value;
    // Remove existing logo classes from the logo element
    logoElement.classList.remove('logo1', 'logo2', 'logo3');
    if (logo !== 'none') {
      // Add the selected logo class to the logo element
      logoElement.classList.add(logo);
    }
  });

  // Update sponsor logo when sponsor select value changes
  sponsorSelect.addEventListener('change', function() {
    const sponsor = sponsorSelect.value;
    // Remove existing sponsor classes from the sponsor element
    sponsorElement.classList.remove('sponsor1', 'sponsor2', 'sponsor3');
    if (sponsor !== 'none') {
      // Add the selected sponsor class to the sponsor element
      sponsorElement.classList.add(sponsor);
    }
  });
});
