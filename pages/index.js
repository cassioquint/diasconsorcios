import next from "next";
import NextLink from "next/link";

function Home() {
    return (<div>
        <h1>Página Inicial</h1>

        <NextLink href="/sobre">
            <a>Sobre</a>
        </NextLink>
    </div>)
    
}

export default Home