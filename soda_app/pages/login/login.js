console.log('login.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements
const $loginForm = document.getElementById('login-form');
const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $confirmPassword = document.getElementById('confirm-password');

// local functions
async function login() {
    const {success, error, data} = await sodaApp.auth.login($email.value, $password.value, '');
    if (!error) {
        window.location.href = '../dashboard/dashboard.html';
    } else {
        console.log('error', error);
    }
}

// event handlers
$loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    login();
});