import {db} from '@vercel/postgres';

export default async function handler(request, response) {
    const client = await db.connect();

    try{
        data = await client.sql `SELECT * FROME information`
        response.status(200).json(data)
    } catch (error){
        response.status(500).json({error})
    }
}