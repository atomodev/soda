console.log('password_reset.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements
const $passwordResetForm = document.getElementById('password-reset-form');
const $email = document.getElementById('email');

// local functions
async function reset() {
    const error = await sodaApp.auth.passwordReset($email.value, '../password_update/password_update.html');

    if (error) {
        console.log('error: ', error);
    } else {
        console.log('password reset email sent');
    }
}

// event handlers
$passwordResetForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    reset();
});