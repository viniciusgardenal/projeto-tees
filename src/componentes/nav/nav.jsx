import './nav.css'

function MeuNav() {
    return (
        <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li className='nav-right'><a href="#">Contato</a></li>
        </ul>
      </nav>
    )
};

export default MeuNav;