import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const Profile = styled.main`
  width: 100%;
  height: 212px;
  margin-top: -88px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem 2.5rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['base-title']};
    ${mixins.fonts.titleL}
  }

  a {
    ${mixins.fonts.Link}
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  a:visited {
    color: ${(props) => props.theme.blue};
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
    transition: border 0.2s;
  }
`

export const ProfileDescription = styled.div`
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']};
  ${mixins.fonts.textM}
`

export const ProfileInfo = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      color: ${(props) => props.theme['base-subtitle']};
      ${mixins.fonts.textM}
    }

    svg {
      width: 18px;
      height: 18px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const FilterWrapper = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      color: ${(props) => props.theme['base-subtitle']};
      ${mixins.fonts.titleS}
    }

    span {
      color: ${(props) => props.theme['base-span']};
      ${mixins.fonts.textS}
    }
  }

  input {
    background: ${(props) => props.theme['base-input']};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-border']};
    ${mixins.fonts.textM}

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const CardWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Card = styled.div`
  width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;

  background: ${(props) => props.theme['base-post']};

  div {
    display: flex;
    gap: 1rem;

    h5 {
      color: ${(props) => props.theme['base-title']};
      ${mixins.fonts.titleM}
    }

    time {
      min-width: 4rem;
      color: ${(props) => props.theme['base-span']};
      ${mixins.fonts.textS}
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-text']};

    max-height: 140px;
    max-width: 400px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`
