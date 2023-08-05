import HomeImg from "../assets/img/homeImg.png"

const Home = () => {
  return (
    <article>
      <h1>Bem vindo(a)!</h1>
      <p>Essa é uma Landing Page inpirada na série &quot;Rick and Morty&quot;. Nessa página você poderá ler a sinópse da série e onde assitir indo no atalho &quot;About&quot;, ou então explorar personagens e locais da série indo no atalho &quot;Select&quot; e selecionando a opção que desejar.</p>
      <img src={HomeImg}/>
    </article>
  );
};

export default Home;
