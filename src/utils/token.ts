import jwt from 'jsonwebtoken';

export async function generateToken(payload: any) {
    const token = await jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '30d' });
    return token
}

export async function decodeToken(token: any) {
    const payload = await jwt.verify(token, process.env.JWT_SECRET as string);
    return payload;
}