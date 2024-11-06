import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import Avatar from '../Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './style'

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={16}>Estevao Castro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        EstevaoCa
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front End
      </Descricao>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
