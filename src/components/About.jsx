import AboutImg from "../assets/img/aboutImg.png"

const About = () => {
    return (
        <article>
            <h1>Rick and Morty</h1>
            <p>Criado por Dan Harmon e Justin Roiland, Rick and Morty acompanha as aventuras do cientista bêbado Rick e seu neto covarde, Morty. A série segue uma fórmula praticamente procedural, em que episódios semanais contam histórias isoladas, com uma ou outra conexão ao longo das temporadas, mas focada em situações semanais através do tempo e espaço.</p>
            <img src={AboutImg}/>
            <a href="https://www.hbomax.com/br/pt/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ">Assista aqui</a>
        </article>
    )
}

export default About