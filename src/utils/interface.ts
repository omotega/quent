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

export interface Ipost {
    post:string,
    user_id:string,
    likes:number,
    comment:number,
    image:string,
    content:string,
    createdAt?:Date,
    updatedAt?:Date,
}

export interface Icomment {
   _id?:string,
   owner:string,
    comment:number,
    createdAt?:Date,
    updatedAt?:Date,
}

