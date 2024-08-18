import './header.css'
function MeuHeader() {
    return (
        <header>
        <h1 className='h1'>VirtualRAAS</h1>
        <span className='span'>
          <a href='#'>Perfil</a>
          <a href='#'>Nome</a>
          <a href='#'>Logout</a>
        </span>
      </header>
    )
};

export default MeuHeader;