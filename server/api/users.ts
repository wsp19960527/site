interface User{
    name:string
    age:number
    job:string
    userId?:number
}
let users:User[] = []
export const addUser = (user:User) => {
    user.userId = users.length + 1
    users.push(user)
}
export const deleteUser = (userId:number):User | Boolean => {
    const index = users.findIndex(item => item.userId == userId)
    if(index > -1){
        const user = users.splice(index,1)
        return user[0]
    }else{
        return false
    }
}
export const getUsers = () => users
