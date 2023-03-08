console.log('dashboard.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements
const $userEmail = document.getElementById('user-email');

// local functions
async function getUser() {
    const user = await sodaApp.auth.getUser();

    if (user) {
        $userEmail.innerHTML = user.email;
    } else {
        console.log('no user, please login');
    }
}


// event handlers, call local functions
await getUser();