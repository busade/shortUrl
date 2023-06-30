document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;
  
    var formData = {
      email: email,
      password_hash: password
    };
  
    fetch('https://url-shortner-apigun.onrender.com/auth/', {
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
        // Login successful, redirect to dashboard or perform other actions
        console.log('Login successful!');
        window.location.href = 'dashboard.html';
      } else {
        // Login failed, display error message to the user
        console.error('Login failed:', data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });