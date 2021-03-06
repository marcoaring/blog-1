import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const Navigation = styled.section`
  ${media.lessThan('large')`
    background-color: var(--bg);
    border-top: 1px solid var(--shadows);
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 55px);
    justify-content: flex-start;
    left: 0;
    padding-top: 20px;
    position: fixed;
    transform: translateX(-100%);
    transition: all 0.5s ease 0s;
    width: 100%;
    z-index: 1;

    &.active {
      transform: translateX(0);
      transition: all 0.5s ease 0s;
    }
  `}

  ${media.greaterThan('large')`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const Thumb = styled(Img)`
  border-radius: 50%;

  ${media.lessThan('large')`
    margin: 0 auto 10px;
    width: 40%;
  `}

  ${media.greaterThan('large')`
    margin: 0 auto 20px;
    width: 60%;
  `}
`;

export const Name = styled.h2`
  font-family: var(--fontStyles);
  text-align: center;
  word-spacing: -2px;

  ${media.lessThan('large')`
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 15px;
  `}

  ${media.greaterThan('large')`
    font-size: 35px;
    line-height: 37px;
    margin-bottom: 15px;
  `}

  > a {
    color: var(--name);
  }
`;

export const Menu = styled.nav`
  ${media.lessThan('large')`
    margin-bottom: 15px;
  `}

  ${media.greaterThan('large')`
    margin-bottom: 25px;
  `}
`;

export const List = styled.ul``;

export const Item = styled.li`
  border-bottom: 1px solid var(--borders);
  width: 100%;

  &:first-child {
    border-top: 1px solid var(--borders);
  }
`;

export const LinkMenu = styled(AniLink)`
  color: var(--links);
  display: block;
  font-family: var(--fontStyles);
  font-size: 1.5rem;
  line-height: 1.25;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: color 0.3s;

  ${media.lessThan('large')`
    padding: 7px 0;
  `}

  ${media.greaterThan('large')`
    padding: 10px 0;
  `}

  &:before {
    bottom: 0;
    content: '';
    right: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.2s ease-in-out 0s;
    visibility: hidden;
    width: 100%;
    z-index: 1;

    ${media.lessThan('large')`
      height: 2.77rem;
    `}

    ${media.greaterThan('large')`
      height: 3.1rem;
    `}
  }

  &:hover,
  &.active {
    color: var(--sidebarLinksHover);
    transition: color 0.3s;

    &:before {
      background-color: var(--sidebarBgLinkHover);
      transform: scaleX(1);
      transform-origin: 100% 50%;
      transition: transform 0.2s ease-in-out 0s;
      visibility: visible;
    }
  }
`;

export const LinkLabel = styled.span`
  position: relative;
  z-index: 2;
`;
