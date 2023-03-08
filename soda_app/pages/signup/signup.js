console.log('signup.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements
const $signupForm = document.getElementById('signup-form');
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $confirmPassword = document.getElementById('confirm-password');

// local functions
async function signup() {
    const {success, error, data} = await sodaApp.auth.signup($email.value, $password.value, $confirmPassword.value);
    console.log('data', data, 'error', error);
}

// event handlers
$signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    signup();
});