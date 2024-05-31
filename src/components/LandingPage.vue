<template>
    <div class="landing-page">
      <header class="header">
        <div class="hero">
          <h1>Welcome to BetaMart</h1>
          <!-- Removed the sign-up button -->
          <!-- <router-link to="/signup" class="btn btn-primary mr-2">Sign Up</router-link> -->
          <!-- Sign in button -->
          <router-link to="/signin" class="btn btn-secondary">Sign In</router-link>
        </div>
      </header>
      <section class="features">
        <div class="feature">
          <h2>Feature One</h2>
          <p>Discover the amazing features we offer</p>
        </div>
        <div class="feature">
          <h2>Feature Two</h2>
          <p>Explore how we can help you succeed</p>
        </div>
        <div class="feature">
          <h2>Feature Three</h2>
          <p>Join us and achieve your goals</p>
        </div>
      </section>
      <footer class="footer">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  .landing-page {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .header {
    background-image: url('https://via.placeholder.com/1920x1080');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-align: center;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  
  .nav-links {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .hero {
    margin-top: auto;
    margin-bottom: auto;
  }
  
  .hero h1 {
    font-size: 48px;
    margin-bottom: 10px;
  }
  
  .hero p {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: #fff;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  .features {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 50px 20px;
  }
  
  .feature {
    flex: 1;
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .feature:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .footer {
    background-color: #f8f9fa;
    text-align: center;
    padding: 20px;
  }
  </style>
  