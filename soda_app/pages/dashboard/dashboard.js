console.log('dashboard.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements
const $userEmail = document.getElementById('user-email');

// local functions
async function getUser() {
    const { data: { user } } = await sodaApp.supabase.auth.getUser()
    $userEmail.innerHTML = user.email;
}


// event handlers on page load
window.addEventListener('load', async (e) => {
    getUser();
});