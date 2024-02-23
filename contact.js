// contact.js

document.addEventListener('DOMContentLoaded', function() {
  // Get form and submit button references
  var contactForm = document.getElementById('contactForm');
  var submitButton = document.getElementById('submitButton');

  // Function to handle form submission
  function submitForm() {
    // Get form data
    var formData = {
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      message: document.getElementById('message').value
    };

    // Construct email body
    var emailBody = 'Name: ' + formData.name + '\n'
                  + 'Company: ' + formData.company + '\n'
                  + 'Email: ' + formData.email + '\n'
                  + 'Phone: ' + formData.phone + '\n'
                  + 'Message: ' + formData.message;

    // Open email client with pre-filled data
    window.location.href = 'mailto:enanong@outlook.com?body=' + encodeURIComponent(emailBody);
  }

  // Add event listener to submit button
  submitButton.addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Call submitForm function
    submitForm();
  });
});
