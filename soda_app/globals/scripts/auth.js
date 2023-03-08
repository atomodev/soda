class Auth {
    constructor(supabase) {
        this.supabase = supabase;
        this.user = null;
        this.isAuth = false;
    }


    async signup(email, password, confirmPassword) {
        const returnValue =  {"data": null, "error": null}

        if (password !== confirmPassword) {
            returnValue.error = 'Passwords do not match';
            return returnValue;
        }

        const {data, error} = await this.supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            returnValue.error = error.message;
            return returnValue;
        } else {
            returnValue.data = data;
            return returnValue;
        }
    }


    async login(email, password) {
        const returnValue =  {"data": null, "error": null}

        const {data, error} = await this.supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            returnValue.error = error.message;
            return returnValue;
        } else {
            returnValue.data = data;
            return returnValue;
        }
    }


    async logout() {
        const {error} = await this.supabase.auth.signOut();
        return error;
    }


    async getUser() {
        const { data: { user } } = await this.supabase.auth.getUser()

        if (user) {
            this.user = user;
            this.isAuth = true;
        } else {
            this.user = null;
            this.isAuth = false;
        }
        return this.user
    }


    async passwordReset(email, redirect) {
        const { data, error } = await this.supabase.auth.resetPasswordForEmail(
            email, {redirectTo: redirect});

        if (error) {
            return error.message;
        } else {
            return null;
        }
    }

}
    
export { Auth };
