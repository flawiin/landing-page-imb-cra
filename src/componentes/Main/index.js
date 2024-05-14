import './Main.css';

const Main = () => {
    return (
        <main>
		    <section className="container-section">
			
			    <img className="img-tecno" src="/imagens/Technology-Transparent-Background.png" alt="Conjunto de dipositivos, PC, Telescópio, Lupa, engrenagens, microscópio, etc."/>
			
			    <h2>Inscreva-se agora na</h2>
                <h2><span style={{color: 'black'}}>CyberTech</span></h2>
			
			    <p>Lorem ipsum dolor sit amet. Et dolorem excepturi aut ipsum laborum 33 sunt eius ab vitae voluptatem non esse repellat et illo nisi. Aut nostrum quod et fugit temporibus ad expedita Quis 33 dolor accusamus sit internos optio aut commodi omnis? Est laboriosam mollitia  error distinctio aut quas facere eum dolor natus non inventore blanditiis ex harum dignissimos et inventore voluptas.</p>
		    </section>
		
		    <form className="container-form">

			    <fieldset>
				
				    <label for="nome-sobrenome"></label>
				    <input className="input-um" type="text" id="nome-sobrenome" required placeholder="Nome"/>
				
				    <label for="email"></label>
				    <input className="input-dois" type="email" id="email" required placeholder="E-mail"/>
				
				    <input className="botao-enviar" type="submit" value="Enviar" name="Enviar Formulário"/>
			    </fieldset>
		    </form>
	    </main>
    );
};

export default Main