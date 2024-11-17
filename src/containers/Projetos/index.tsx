import Titulo from '../../components/Titulo'
import Projeto from '../Projeto'

import { ListaProjetos } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <ul>
      <ListaProjetos>
        <Projeto />
      </ListaProjetos>
    </ul>
  </section>
)

export default Projetos
