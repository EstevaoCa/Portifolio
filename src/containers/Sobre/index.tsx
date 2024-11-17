import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Olá, meu nome é Estevão, tenho 27 anos, Nasci e creci na cidade de Sâo
      paulo e permaneço residente nela, Atualmente profissional em formação no
      curso Engenharia de Front-End, e buscando oportunidades para crescer e me
      aprimorar na área, para agregar os meus conhecimentos e ter um bom
      desempenho no mercado de trabalho.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=EstevaoCa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=EstevaoCa&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSecao>
  </section>
)

export default Sobre
