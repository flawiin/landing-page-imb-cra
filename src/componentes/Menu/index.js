import './Menu.css';

const Menu = () => {
    return (
        <header>
            <section className="container-header">
			
			    <img width="240px" heidth="240px" src="/imagens/logo-ibm.png"/>
			
			    <nav>
				    <ul>
					    <li><a href="index.html">Início</a></li>
					    <li><a href="servicos.html">Serviços</a></li>
					    <li><a href="sobre.html">Sobre</a></li>
					    <li><a href="contato.html">Contato</a></li>
				    </ul>
			    </nav>
		    
            </section>
	    </header>
    );
};

export default Menu