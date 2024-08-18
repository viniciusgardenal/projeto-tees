import './nav.css'

function MeuNav() {
    return (
        <nav className='nav nav-ul-principal .nav-ul-li-principal '>
        <ul className='nav-ul-li-a'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pacientes</a></li>
          <li><a href="#">Agendamentos</a></li>
          <li><a href="#">Estoque</a></li>
          <li><a href="#">Relatórios</a></li>
        </ul>
      </nav>
    )
};

export default MeuNav;