'use server'

import { PrismaClient } from "../database"

const prisma = new PrismaClient()
export async function GET(req) {
    
    const users = await prisma.user.findMany({
        select: {
            user_name: true
        }
    })


    return new Response(JSON.stringify(users))
}

export async function POST(req) {

    const body = await req.json();

    const user = await prisma.user.create(
        {
            data: {
                user_name: body.nome
            }
        }
    )

    return new Response(JSON.stringify(user))
}