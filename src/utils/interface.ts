export interface Iuser {
    _id?:string
    name:string,
    email:string,
    address?:string
    password:string,
    role?:string,
}
export interface CustomRequest{
    user:Iuser,
    file:object,
    params:object,
    query:object,
    path:object,
}

