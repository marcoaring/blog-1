import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styles';
import Icons from '../icons/index';

export default function Sidebar({ siteTitle }) {
  const [isOpen, setOpen] = useState(false);
  const location = typeof window !== 'undefined' && window.location.pathname;
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logos/logo.png" }) {
          childImageSharp {
            fixed(height: 30, width: 95) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <S.Sidebar>
      <S.LogoLink to="/">
        <Img fixed={logo.childImageSharp.fixed} />
        {location === '/' ? (
          <S.Title>{siteTitle}</S.Title>
        ) : (
          <S.InternalTitle>{siteTitle}</S.InternalTitle>
        )}
      </S.LogoLink>

      <S.Navigation className={isOpen && 'active'}>
        <S.Menu>
          <S.Name>Bruno Dulcetti</S.Name>
          <S.List>
            <S.Item>
              <S.LinkMenu to="/">Home</S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu to="/sobre">Quem é?</S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu to="/curriculo">Currículo</S.LinkMenu>
            </S.Item>
            <S.Item>
              <S.LinkMenu to="/contato">Contato</S.LinkMenu>
            </S.Item>
          </S.List>
        </S.Menu>

        <S.SocialMedias>
          <S.Media>
            <a
              href="https://github.com/dulcetti"
              target="_blank"
              rel="noopener noreferrer">
              <Icons name="github" />
            </a>
          </S.Media>
          <S.Media>
            <a
              href="https://www.linkedin.com/in/dulcetti/"
              target="_blank"
              rel="noopener noreferrer">
              <Icons name="linkedin" />
            </a>
          </S.Media>
          <S.Media>
            <a
              href="https://twitter.com/dulcetti"
              target="_blank"
              rel="noopener noreferrer">
              <Icons name="twitter" />
            </a>
          </S.Media>
          <S.Media>
            <a
              href="https://instagram.com/dulcetti"
              target="_blank"
              rel="noopener noreferrer">
              <Icons name="instagram" />
            </a>
          </S.Media>
          <S.Media>
            <a
              href="https://facebook.com/dulcetti"
              target="_blank"
              rel="noopener noreferrer">
              <Icons name="facebook" />
            </a>
          </S.Media>
        </S.SocialMedias>
      </S.Navigation>

      <S.Text>
        © {new Date().getFullYear()}, Todos os fodasses reservados.
      </S.Text>
      <S.ToggleOpenClose
        onClick={toggleMenu}
        className={isOpen && 'active'}></S.ToggleOpenClose>
    </S.Sidebar>
  );
}