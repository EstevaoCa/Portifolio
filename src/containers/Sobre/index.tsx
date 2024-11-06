import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
      repellendus et explicabo aperiam ut nostrum iure delectus. Eaque
      temporibus, repellat exercitationem dolorem suscipit tenetur, iure aperiam
      alias ipsam non nam.
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
