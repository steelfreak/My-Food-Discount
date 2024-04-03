document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('discountForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var emailInput = document.getElementById('emailInput').value;
    var codeInput = document.getElementById('codeInput').value;
    var output = document.getElementById('output');
    
    if (!isValidEmail(emailInput)) {
      output.innerHTML = "Please enter a valid email address.";
      return false; // Prevent form submission
    }
    
    if (codeInput.toLowerCase() === 'half') {
      var discountAmount = 45000 * 0.15;
      output.innerHTML = "You've got a 15% discount! Your discounted price is " + (45000 - discountAmount) + " shillings.";
    } else {
      output.innerHTML = "The total sum is 45000 shillings.";
    }
    
    return false; // Prevent form submission
  });

  function isValidEmail(email) {
    // Regular expression for validating email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
