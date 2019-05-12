class AuthenticateUser {

    saveCredentials(username){
        sessionStorage.setItem("AuthenticateUser", username);
    }

    deleteCredentials() {
        sessionStorage.removeItem("AuthenticateUser");
    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem("AuthenticateUser")
        if(user===null) {
            return false;
        }
        return true;
    }

}

export default new AuthenticateUser()