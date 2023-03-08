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

    async getUser() {
        const { data: { user } } = await supabase.auth.getUser()

        if (user) {
            this.user = user;
            this.isAuth = true;
        } else {
            this.user = null;
            this.isAuth = false;
        }
    }

}
    
export { Auth };
