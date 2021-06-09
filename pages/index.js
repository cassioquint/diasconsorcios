import Link from 'next/Link';

function Home() {
    return <div>
        <h1>Página Inicial</h1>

        <Link href="/sobre">
            <a>Sobre</a>
        </Link>
    </div>
    
}

export default Home