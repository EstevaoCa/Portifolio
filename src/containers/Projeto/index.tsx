import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJs</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
