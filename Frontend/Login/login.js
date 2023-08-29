document.addEventListener('DOMContentLoaded', () => {

     const loginForm = document.getElementById('post');

     loginForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const formData = new FormData(loginForm);
          const loginData = {
              username: formData.get('email'),
              password: formData.get('password')
          };
          try {
              const response = await fetch('E:\Web Project\Frontend\Login\login', {
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