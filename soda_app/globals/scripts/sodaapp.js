
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Auth } from './auth.js';


class SodaApp {
    constructor() {
        this.supabase = null;
        this.auth = null;
    }
    
    static async createSodaApp() {
        const sodaApp = new SodaApp();
        const supabaseURL = 'https://xdrwpvyakhvctpiulhiq.supabase.co'
        const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkcndwdnlha2h2Y3RwaXVsaGlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyODEzNDUsImV4cCI6MTk5Mzg1NzM0NX0.qqx0114XxuZWPFw2MvSG8JHpsoJB0wFSqBOhHqaPB6s'
        sodaApp.supabase = createClient(supabaseURL, supabaseKey)
        sodaApp.auth = new Auth(sodaApp.supabase);
        return sodaApp;
    }

}


export const createSodaApp = SodaApp.createSodaApp;