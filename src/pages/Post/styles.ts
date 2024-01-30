import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const PostContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const PostHeader = styled.header`
  width: 100%;
  height: 168px;
  margin-top: -88px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  border-radius: 10px;
`

export const PostMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    ${mixins.fonts.Link}
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    svg {
      width: 12px;
      height: 12px;
    }

    a:visited {
      color: ${(props) => props.theme.blue};
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border 0.2s;
    }
  }
`

export const PostTitle = styled.h2`
  margin-top: 1.25rem;
  ${mixins.fonts.titleL}
  color: 1px solid ${(props) => props.theme['base-title']};
`

export const PostInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-span']};
      ${mixins.fonts.textM}
    }
  }
`

export const PostContent = styled.div`
  color: ${(props) => props.theme['base-text']};
  ${mixins.fonts.textM}

  padding: 2.5rem 2rem;

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 0 1rem;
    margin: 1.5rem 0;
  }
`
