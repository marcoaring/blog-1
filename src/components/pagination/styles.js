import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';

export const PaginationContent = styled.aside`
  font-family: var(--fontStyles);
  text-align: center;

  ${media.lessThan('large')`
    padding: 0 10px;
  `}
`;

export const PaginationWrap = styled.nav`
  align-items: center;
  background-color: var(--paginationBg);
  border-radius: 30px;
  border: 3px solid var(--paginationBorderWrap);
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  &.first-page {
    justify-content: flex-end;
  }

  &.last-page {
    justify-content: flex-start;
  }
`;

export const ActionLinks = styled(AniLink)`
  border-right: 1px solid var(--paginationBorderDark);
  border-left: 1px solid var(--paginationBorderLight);
  color: var(--paginationLink);
  font-weight: bold;
  font-size: 22px;
  padding: 10px 0;
  transition: background-color 0.3s, color 0.3s;
  width: 25%;

  &:hover {
    background-color: var(--paginationLinkBg);
    color: var(--paginationLinkHover);
    transition: background-color 0.3s, color 0.3s;

    span {
      margin: 0 20px;
      transition: margin 0.3s;
    }
  }

  &.first {
    border-left: 0;
    border-radius: 30px 0 0 30px;
  }

  &.first,
  &.previous {
    svg {
      transform: rotate(180deg);
    }
  }

  &.last {
    border-right: 0;
    border-radius: 0 30px 30px 0;
  }
`;

export const TextPages = styled.p`
  font-size: 18px;
  line-height: 18px;
`;

export const Text = styled.span`
  ${media.greaterThan('large')`
    margin: 0 7px;
    transition: margin .3s;
  `}

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const Icon = styled.i`
  display: inline-block;
  height: 24px;
  vertical-align: middle;
  width: 24px;

  > svg {
    height: inherit;
    width: inherit;
  }
`;

export const ActualPage = styled.strong`
  border-bottom: 2px solid var(--paginationActive);
  display: inline-block;
  font-weight: bold;
  line-height: 18px;
`;
