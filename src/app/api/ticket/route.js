'use server'

import { PrismaClient } from "../database"

const prisma = new PrismaClient()
export async function GET(req) {
    
    const tickets = await prisma.ticket.findMany({
        select: {
            ticket_name: true
        }
    })



    return new Response(JSON.stringify(tickets))
}