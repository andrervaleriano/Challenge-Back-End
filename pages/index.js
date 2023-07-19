//https://challenge-back-end.vercel.app
import Link from 'next/link';
import React from 'react'

function Home() {
    return (
    <div>
        <h2>Home</h2>
        <Link href="/sobre">
        Acessar pagina Sobre
        </Link>
    </div>
    )
}



export default Home