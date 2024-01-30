import removeMarkdown from 'remove-markdown'
import { FaGithub } from 'react-icons/fa'
import {
  Card,
  CardWrapper,
  Container,
  FilterWrapper,
  Profile,
  ProfileDescription,
  ProfileHeader,
  ProfileInfo,
} from './styles'
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaUserGroup,
} from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'

interface PostData {
  id: number
  title: string
  body: string
  createdAt: string
}

interface UserData {
  avatarUrl: string
  company: string
  bio: string
  followers: number
}

const githubUser = 'threis'
const githubRepo = 'ignite-github-blog'

export function Home() {
  const navigate = useNavigate()

  const [user, setUser] = useState<UserData>({} as UserData)
  const [posts, setPosts] = useState<PostData[]>([])
  const [filter, setFilter] = useState('')

  async function loadPosts() {
    const response = await api.get(`/repos/${githubUser}/${githubRepo}/issues`)

    console.log('loadPosts')
    if (response.status === 200) {
      const postList = response.data.map(
        (post: {
          number: number
          title: string
          body: string
          created_at: string
        }) => {
          return {
            id: post.number,
            title: post.title,
            body: post.body,
            createdAt: post.created_at,
          }
        },
      )

      setPosts(postList)
    }
  }

  async function loadUser() {
    const response = await api.get(`/users/${githubUser}`)
    if (response.status === 200) {
      const { avatar_url: avatarUrl, company, bio, followers } = response.data

      setUser({
        avatarUrl,
        company,
        bio,
        followers,
      })
    }
  }

  useEffect(() => {
    loadPosts()
    loadUser()
  }, [])

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <Container>
      <Profile>
        <img src={`https://github.com/${githubUser}.png`} alt="" />
        <div>
          <ProfileHeader>
            <h2>Thiago Reis</h2>
            <a href={`https://github.com/${githubUser}/${githubRepo}/issues`}>
              GITHUB <FaArrowUpRightFromSquare />
            </a>
          </ProfileHeader>
          <ProfileDescription>{user.bio}</ProfileDescription>
          <ProfileInfo>
            <div>
              <FaGithub />
              <span>{githubUser}</span>
            </div>
            <div>
              <FaBuilding />
              <span>{user.company}</span>
            </div>
            <div>
              <FaUserGroup />
              <span>
                {user.followers === 1
                  ? `${user.followers} seguidor`
                  : `${user.followers} seguidores`}{' '}
              </span>
            </div>
          </ProfileInfo>
        </div>
      </Profile>
      <FilterWrapper>
        <div>
          <h4>Publicações</h4>
          <span>
            {posts.length === 1
              ? `${posts.length} publicação`
              : `${posts.length} publicações`}
          </span>
        </div>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </FilterWrapper>
      <CardWrapper>
        {filteredPosts.map((post) => {
          const dataFormatted = formatDistanceToNow(new Date(post.createdAt), {
            addSuffix: true,
            locale: ptBR,
          })
          const textPreview = removeMarkdown(post.body)
            .replace(/\s/g, ' ')
            .replace(/\s$/, '')
          return (
            <Card
              key={post.id}
              onClick={() =>
                navigate(
                  `/post?github_user=${githubUser}&github_repo=${githubRepo}&issue_id=${post.id}`,
                )
              }
            >
              <div>
                <h5>{post.title}</h5>
                <time dateTime={post.createdAt}>{dataFormatted}</time>
              </div>
              <p>{textPreview}</p>
            </Card>
          )
        })}
      </CardWrapper>
    </Container>
  )
}
