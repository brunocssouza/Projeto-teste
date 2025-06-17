'use client'

import { useState } from "react";

export default function Home() {
  const [usuario, setUsuario] = useState([])
  const [tickets, setTickets] = useState([])

  const fetchTickets = async () => {
    const data = await fetch('api/ticket').then(res => res.json())
    setTickets(data.map(ticket => ticket.ticket_name))
  }

  const fetchUsers = async () => {
    const users = await fetch('api/user').then(res => res.json())
    setUsuario(users.map(user => user.user_name))
    fetchTickets()
  }


  return (
    <>
      <div><h1 className="text-4xl">Home Page</h1></div>
      <button className="py-4 px-4 bg-blue-500" onClick={fetchUsers}>BOTAO</button>

      <div className="border bg-red-500 py-1 px-1">
        <ul>
        {usuario.map((user, key) => (
          <li key={key}>{user}</li>
        ))}
        </ul>
        </div>

        <div className="border bg-blue-500 py-1 px-1">

        
        <ul>
        {tickets.map((ticket, key) => (
          <li key={key}>{ticket}</li>
        ))}
        </ul>
        </div>
    </>
  );
}
