import next from "next";
import NextLink from "next/link";

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
            <NextLink href="/">
                <a>Página Inicial</a>
            </NextLink><br/>
            <NextLink href="/sobre">
                <a>Sobre</a>
            </NextLink>
        </div>
        
    )
}
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}
export default Tempo;