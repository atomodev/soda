console.log('password_update.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements
const $passwordUpdateForm = document.getElementById('password-update-form');
const $email = document.getElementById('email');

// local functions
async function update() {
    console.log('update()');
}

// event handlers
$passwordUpdateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    update();
});