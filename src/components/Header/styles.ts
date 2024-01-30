import styled from 'styled-components'

import bannerImg from '../../assets/banner.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  padding-top: 4rem;

  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const Logo = styled.img`
  width: 9.25rem;
  height: 6.125rem;
`
