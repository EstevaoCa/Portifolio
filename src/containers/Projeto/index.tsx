import { useEffect, useState } from 'react'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Card, LinkBotao } from './style'

const Projeto = () => {
  const [repos, setRepos] = useState([])
  const [estaCarregando, setEstaCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositorios = async () => {
      try {
        // Limpa estados antes de buscar dados
        setRepos([])
        setErro(null)
        setEstaCarregando(true)

        const resposta = await fetch(
          'https://api.github.com/users/EstevaoCa/repos'
        )
        if (!resposta.ok) {
          throw new Error(
            'Erro ao buscar os repositórios ou usuário não encontrado'
          )
        }

        const dados = await resposta.json()
        setRepos(dados)
      } catch (error) {
        const mensagemErro =
          error instanceof Error ? error.message : 'Erro desconhecido'
        setErro(mensagemErro)
      } finally {
        setEstaCarregando(false)
      }
    }

    fetchRepositorios()
  }, []) // Dependências vazias para rodar apenas uma vez

  // Renderização condicional
  if (estaCarregando) {
    return <p>Carregando...</p>
  }

  if (erro) {
    return <p>Ocorreu um erro: {erro}</p>
  }

  return (
    <>
      {repos.map(({ name, id, language, html_url }) => (
        <Card key={id}>
          <Titulo>{name}</Titulo>
          <Paragrafo tipo="secundario">
            Lista de tarefas feitas com{' '}
            {language || 'linguagem não especificada'}
          </Paragrafo>
          <LinkBotao target="_blank" rel="noopener noreferrer" href={html_url}>
            Visitar no GitHub
          </LinkBotao>
        </Card>
      ))}
    </>
  )
}

export default Projeto
