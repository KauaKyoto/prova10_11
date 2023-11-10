import Post from './components/post';
import Coments from './components/coments';
import imagem from './img/patch.jpg'
import img1 from './img1/morgana.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <Post
        titulo="League of Kyoto"
        imagem={imagem}
        descricao="O novo patch notes 13.22 gerou polêmicas para os jogadores. Apontando que muitos buffs, nerfs e ajustes foram 
        totalmente desnecessários e incoerentes com a realidade atual do jogo. Jogadores da comunidade entraram em contato com o 
        porta-voz, Kyoto, para abordar sobre o tema em questão que está afetando a jogabilidade e entendimento dos players.
        A própria Riot Games, veio a público falar com os jogadores pacíficamente através do 'x' (Antigo Twitter). No entanto nenhum
        dos players receberam com respeito a vossa fala."
        categoria="Categoria: Games"/>
        <div className='imgs'>
        <Coments
        img1={img1} 
        comentario1="Brand agora tá virando jungle?! A Riot daqui a pouco tá fazendo Lulu, Lux, Soraka e Nami jungle, é o que falta 
        pra tornar esse meta tão forte no meu elo. Muito obrigada, Roit!!"/>
        </div>
    </div>
  );
}

export default App;
