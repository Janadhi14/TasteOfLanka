// Scroll to Menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle form submission
  function submitForm(event) {
    event.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    document.getElementById('contactForm').reset();
  }
  