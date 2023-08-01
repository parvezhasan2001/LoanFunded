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
// lul