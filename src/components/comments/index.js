import React from 'react';
import propTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styles';

export default function Comments({ slug, title }) {
  const fullUrl = `https://www.brunodulcetti/${slug}`;

  return (
    <S.Wrapper>
      <S.Title>Comentários</S.Title>
      <ReactDisqusComments shortname="brunodulcetti" identifier={fullUrl} title={title} url={fullUrl} />
    </S.Wrapper>
  );
}

Comments.propTypes = {
  slug: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};