import { createContext, useState } from "react";

export const LoginFormContext = createContext();

const LoginFormDataProvider = ({children}) => {
    const [loginFormEmail, setLoginFormEmail] = useState();

    const loginFormInfo = {
        loginFormEmail,
        setLoginFormEmail
    };

    return <LoginFormContext.Provider value={loginFormInfo}>{children}</LoginFormContext.Provider>
};

export default LoginFormDataProvider;