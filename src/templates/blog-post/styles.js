import styled from 'styled-components';
import media from 'styled-media-query';

import { themes } from '../../styles/themes';

export const PostWrap = styled.div`
  margin: auto;
  max-width: var(--maxWidth);

  ${media.lessThan('large')`
    padding: 1.25rem;
  `}
`;

export const PostTitle = styled.h1`
  font-size: min(56px, 10vw);
  line-height: min(60px, 10vw);
  margin-bottom: 0.5rem;
`;

export const PostDescription = styled.h2`
  color: var(--text);
  font-style: italic;
  font-weight: normal;
  line-height: 1.2;
  margin-bottom: 1rem;

  ${media.lessThan('large')`
    font-size: 1.5rem;
  `}

  ${media.greaterThan('large')`
    font-size: 1.75rem;
  `}
`;

export const PostInfos = styled.p`
  background-color: ${(prop) => `${themes.categories[prop.color]}`};
  color: var(--negativeColor);
  display: flex;
  font-family: var(--fontStyles);
  justify-content: space-between;

  ${media.lessThan('large')`
    flex-wrap: wrap;
    font-size: 1.15rem;
    margin-bottom: 14px;
    text-align: center;
    padding: .35rem .5rem;
  `}

  ${media.greaterThan('large')`
    font-size: 1.35rem;
    margin-bottom: 20px;
    padding: .5rem 1rem;
  `}
`;

export const CategoryPost = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

export const DatePost = styled.span`
  cursor: wait;
`;

export const TimeToRead = styled.span`
  cursor: wait;

  > strong {
    font-weight: bold;
  }

  ${media.lessThan('large')`
    border-top: 1px solid var(--postsBorderInfos);
    margin-top: 5px;
    order: 3;
    padding-top: 5px;
    width: 100%;
  `}
`;

export const PostContent = styled.section`
  color: var(--textColor);
  font-size: 1.25rem;

  p,
  ul,
  ol,
  table {
    ${media.lessThan('large')`
      line-height: 1.25;
      margin-bottom: 1.25rem;
    `}

    ${media.greaterThan('large')`
      line-height: 1.5;
      margin-bottom: 1.5rem;
    `}
  }

  ul {
    li {
      list-style: square inside;
    }
  }

  ol {
    li {
      list-style: decimal inside;
    }
  }

  li {
    margin-bottom: 0.5rem;

    ${media.lessThan('medium')`
      padding-left: 1rem;
    `}

    ${media.greaterThan('medium')`
      padding-left: 1.6rem;
    `}
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    margin: 1.5rem auto;
    max-width: 100%;
  }

  iframe {
    padding: 1.5rem;
    width: 100%;
  }

  blockquote {
    background-color: var(--blockquoteBg);
    border-left: 0.3rem solid var(--blockquoteBorder);
    color: var(--textColor);
    display: block;
    font-family: var(--fontStyles);
    font-size: min(26px, 7vw);
    font-style: italic;
    line-height: min(36px, 8vw);
    margin-bottom: 1.5rem;
    padding: 20px;
    position: relative;

    > p {
      margin-bottom: 1.25rem;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  h2 {
    font-size: min(50px, 9vw);
    line-height: min(56px, 10vw);
  }

  h3 {
    font-size: min(40px, 7vw);
    line-height: min(40px, 8vw);
  }

  h4 {
    font-size: min(30px, 6vw);
    line-height: min(36px, 7vw);
  }

  h5 {
    font-size: min(20px, 6vw);
    line-height: min(26px, 6vw);
  }

  h6 {
    font-size: min(20px, 5vw);
    line-height: min(26px, 5vw);
  }

  strong {
    font-weight: bold;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--links);
    overflow-wrap: break-word;
    position: relative;
    transition: color 0.3s;

    &:before {
      bottom: -2px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
      visibility: hidden;
      width: 100%;
    }

    &:hover {
      &:before {
        background-color: var(--linksBorder);
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
`;
