export default function addUser(user = {}, action){
    if(action.type === 'addUser'){
        let newUser = {
            ...user,
            login: action.user.login,
            token: action.user.token,
            role: action.user.role
        }
        return newUser
    } else {
        return user
    }
}