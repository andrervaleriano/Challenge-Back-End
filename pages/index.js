//https://challenge-back-end.vercel.app
import Link from 'next/link';

function Home() {
    return (
    <div>
        <h2>Home</h2>
        <Link href="/sobre">
        <a>Acessar pagina Sobre</a>
        </Link>
    </div>
    )
}



export default Home