Vue.createApp({
    data() {
        return {
            password: "",
            passwordConfirm: "",
            inputType: "password",
            button: "Show Password",
        };
    },

    methods: {
        showOrHide() {
            if (this.inputType === "password") {
                this.button = "Hide Password";
                this.inputType = "text";
            } else {
                this.button = "Show Password";
                this.inputType = "password";
            }
        },
        reset() {
            this.password = "";
            this.passwordConfirm = "";
        },
    },
    computed: {
        passwordIsEqual() {
            if (
                this.password === this.passwordConfirm &&
                this.password + this.passwordConfirm !== ""
            ) {
                return "✅";
            } else {
                return "❌";
            }
        },
        isLowerCase() {
            if (/[a-z]/.test(this.password)) {
                return "✅";
            } else {
                return "❌";
            }
        },
        isUpperCase() {
            if (/[A-Z]/.test(this.password)) {
                return "✅";
            } else {
                return "❌";
            }
        },
        isNumberCase() {
            if (/[0-9]/.test(this.password)) {
                return "✅";
            } else {
                return "❌";
            }
        },
        isCharactersCase() {
            if (this.password.length >= 10) {
                return "✅";
            } else {
                return "❌";
            }
        },
    },
}).mount("#app");