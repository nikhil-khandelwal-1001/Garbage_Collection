
    function showLogin() {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('signupForm').style.display = 'none';
      document.getElementById('loginBtn').style.fontWeight = 'bold';
      document.getElementById('signupBtn').style.fontWeight = 'normal';
    }

    function showSignUp() {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('signupForm').style.display = 'block';
      document.getElementById('loginBtn').style.fontWeight = 'normal';
      document.getElementById('signupBtn').style.fontWeight = 'bold';
    }

    // Default to show login form on page load
    showLogin();
  