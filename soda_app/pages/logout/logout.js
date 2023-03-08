console.log('logout.js started');

import { createSodaApp } from '../../globals/scripts/sodaapp.js';

// init
const sodaApp = await createSodaApp();

// init DOM elements


// local functions
async function logout() {
    const error = await sodaApp.auth.logout();
    
    if (error) {
        console.log('error', error);
    } else {
        window.location.href = '../../index.html';
    }
}


// event handlers, call local functions
await logout();