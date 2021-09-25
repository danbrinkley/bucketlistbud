
import tellMyAppTo from "./tellMyAppTo";

const create = (data) => {
    return tellMyAppTo.post("/users", data);
};

const login = (data) => {
    return tellMyAppTo.post("/auth/login", data);
};

function getUser() {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}

export { create, login, getUser };