document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var email = document.getElementById('email-input').value;
    console.log(email);
    var fullname = document.getElementById('full-name').value;
    var password = document.getElementById('password-input').value;
    console.log(password);
    var confirmPassword = document.getElementById('confirm-password-input').value;
  
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return; // Stop further execution
    }
  
    var formData = {
      email: email,
      fullname: fullname,
      password_hash: password
    };
  
    fetch('https://url-shortner-apigun.onrender.com/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Handle API response
      if (data) {
        // Signup successful, redirect to login page or perform other actions
        console.log('Signup successful!');
        window.location.href = 'login.html';
      } else {
        // Signup failed, display error message to the user
        console.error('Signup failed:',);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });