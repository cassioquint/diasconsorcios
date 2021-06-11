import next from "next";
import NextLink from "next/link";

function Sobre() {
    return (<div>
        <h1>Sobre</h1>

        <NextLink href="/">
            <a>Página Inicial</a>
        </NextLink><br/>
        <NextLink href="/tempo">
            <a>Tempo</a>
        </NextLink>
    </div>)
    
}

export default Sobre