console.log('Soda greets you with a warm hello!');

import { createSodaApp } from './globals/scripts/sodaapp.js';

const sodaApp = await createSodaApp();


console.log('sodaApp', sodaApp.supabase);