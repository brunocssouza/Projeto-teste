'use server'

import { PrismaClient } from "../../database"

const prisma = new PrismaClient()
export async function GET(req, {params}) {


    console.log(params)
    console.log( typeof params)

    const {id} = params
    
    const users = await prisma.user.findFirst({
        where: {
            user_name: id
        }
    })


    console.log(id)
    return new Response(JSON.stringify(users || {}))
}

