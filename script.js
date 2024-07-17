//email validation
const form = document.getElementById('sub-form');
const submitButton = document.getElementById('submit-button');
const dismissButton = document.getElementById('dismiss');
const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const container = document.getElementById('container');
const success = document.getElementById('success');

dismissButton.addEventListener('click', function() {
    success.classList.add('hidden');
    container.classList.remove('hidden');
    email.style.backgroundColor='white';
    email.value='';
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    if(email.value === ''){
        errorMsg.textContent = 'This flied is required';
        email.style.backgroundColor='var(--email-error-background)';
        isValid=false;
    }
    else
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)){
        errorMsg.textContent = 'Email not valid';
        email.style.backgroundColor='var(--email-error-background)';
        isValid=false;
    }
    else if(isValid){
            
            
            container.classList.add('hidden');
            success.classList.remove('hidden');

      

    }
});
