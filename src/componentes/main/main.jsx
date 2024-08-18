import './main.css'

function MeuMain(){
    return(
        <main>
        <div className="content">
          <h2>Menu de navegação</h2>
          <ul className='menu'>
            <li><a href='#'>Gerenciar pacientes</a></li>
            <li><a href='#'>Gerenciar Agendamentos</a></li>
            <li><a href='#'>Controle de estoque</a></li>
            <li><a href='#'>Relatórios</a></li>
          </ul>
        </div>
        <aside className='content'>
          <h2>
            Visão geral
          </h2>
        </aside>
      </main>
      
        
      
    )
};

export default MeuMain;