// var token;

// export const isLoggedIn = _ => token != null;
// export const logOut = _ => token = undefined;
// export const logIn = (_user, _password, callback) => {
//     token = "123";
//     if (callback) callback(token);
// };

export const logIn = (_user, _password, _role) => localStorage.token = "Succes";

export const logOut = _ => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("roles");
    localStorage.removeItem("role");
}
export const getUserId = _ => localStorage.userId;
export const getUserName = _ => localStorage.userName;
export const isLoggedIn = _ => localStorage.token != null;
export const getCurrentRole = _ => localStorage.role;


export const getMyBU = _ => localStorage.bu;
export const getMyBUName = _ => localStorage.buName;
