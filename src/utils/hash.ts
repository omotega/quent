import bcrypt from "bcrypt";


export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password,salt);
    return hashpassword;
}

export async function comparePassword(hashPassword: string,password: string) {
    const userPassword = await bcrypt.compare(hashPassword,password);
    return userPassword;
}