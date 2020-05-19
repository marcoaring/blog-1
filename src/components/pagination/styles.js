import styled from 'styled-components';
import { Link } from 'gatsby';
import media from 'styled-media-query';

import { themes } from '../../styles/themes';

export const PaginationContent = styled.aside`
  font-family: ${themes.fonts.titles};
  text-align: center;

  ${media.lessThan('large')`
    padding: 0 10px;
  `}
`;

export const PaginationWrap = styled.nav`
  align-items: center;
  background-color: #ece7e1;
  border-radius: 30px;
  border: 3px solid #a68e69;
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

export const ActionLinks = styled(Link)`
  border-right: 1px solid #cec2ac;
  border-left: 1px solid #f3f0ed;
  color: #5a5038;
  font-weight: bold;
  font-size: 22px;
  padding: 10px 0;
  transition: background-color 0.3s, color 0.3s;
  width: 25%;

  &:hover {
    background-color: #e3cfad;
    color: #f26a00;
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
  border-bottom: 2px solid #f26a00;
  display: inline-block;
  font-weight: bold;
  line-height: 18px;
`;