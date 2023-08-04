document.addEventListener('DOMContentLoaded', () => {
     const regForm = document.getElementById('btn_Signup');
     const loginForm = document.getElementById('btn_login');
 
     regForm.addEventListener('submit', async (e) => {
         e.preventDefault();
         const formData = new FormData(regForm);
         const userData = {
             id: formData.get('reg-username'),
             firstname: formData.get('reg-firstname'),
             lastname: formData.get('reg-lastname'),
             email: formData.get('reg-email'),
             password: formData.get('reg-password')
         };
         try {
             const response = await fetch('/register', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(userData)
             });
             // Handle the response as needed
         } catch (error) {
             console.error('Registration failed:', error);
         }
     });
 
     loginForm.addEventListener('submit', async (e) => {
         e.preventDefault();
         const formData = new FormData(loginForm);
         const loginData = {
             username: formData.get('login-username'),
             password: formData.get('login-password')
         };
         try {
             const response = await fetch('/login', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(loginData)
             });
             // Handle the response as needed
         } catch (error) {
             console.error('Login failed:', error);
         }
     });
 });
 