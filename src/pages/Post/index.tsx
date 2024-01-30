import Markdown from 'react-markdown'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'
import {
  PostContainer,
  PostContent,
  PostHeader,
  PostInfo,
  PostMenu,
  PostTitle,
} from './styles'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostData {
  title: string
  body: string
  amountComments: number
  createdAt: string
}

export function Post() {
  const searchParams = useSearchParams()[0]

  const githubUser = searchParams.get('github_user')
  const githubRepo = searchParams.get('github_repo')
  const githubIssueNumber = searchParams.get('issue_id')

  const [post, setPost] = useState<PostData>({} as PostData)
  const [postDateDistanceToNow, setPostDateDistanceToNow] = useState('')

  async function getGithubIssueByNumber() {
    const response = await api.get(
      `/repos/${githubUser}/${githubRepo}/issues/${githubIssueNumber}`,
    )

    if (response.status === 200) {
      const {
        title,
        body,
        comments: amountComments,
        created_at: createdAt,
      } = response.data

      setPost({
        title,
        body,
        amountComments,
        createdAt,
      })

      setPostDateDistanceToNow(
        formatDistanceToNow(new Date(createdAt), {
          addSuffix: true,
          locale: ptBR,
        }),
      )
    }
  }

  useEffect(() => {
    getGithubIssueByNumber()
  }, [])

  return (
    <PostContainer>
      <PostHeader>
        <PostMenu>
          <NavLink to="/">
            <FaChevronLeft /> VOLTAR
          </NavLink>
          <a href={`https://github.com/${githubUser}/${githubRepo}/issues`}>
            VER NO GITHUB <FaArrowUpRightFromSquare />
          </a>
        </PostMenu>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
          <div>
            <FaGithub />
            <span>{githubUser}</span>
          </div>
          <div>
            <FaCalendarDay />
            <span>{postDateDistanceToNow}</span>
          </div>
          <div>
            <FaComment />
            <span>
              {post.amountComments > 1
                ? ` ${post.amountComments} comentários`
                : ` ${post.amountComments} comentário`}
            </span>
          </div>
        </PostInfo>
      </PostHeader>

      <PostContent>
        <Markdown>{post.body}</Markdown>
      </PostContent>
    </PostContainer>
  )
}
