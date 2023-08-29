document.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('btn');

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
            const response = await fetch('E:\Web Project\Frontend\Register\registration', {
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

});

function validityChecker(){
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const validation = document.getElementById('validation')

    if(password.value == confirmPassword.value){
        validation.style.backgroundColor="green";
    }
    else{
        validation.style.backgroundColor="red";
    }
}

