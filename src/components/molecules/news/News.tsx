import * as React from 'react';
import { CSSProperties } from 'styled-components';
import ImgBox from '@/components/atoms/imgBox/ImgBox';
import Title from '@/components/atoms/Labels/title/Title';

const News = () => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const NewsStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    transform: `${isHover ? 'scale(1.1)' : 'none'}`,
    transition: 'all 0.3s ease-in-out;',
  };
  return (
    <>
      <div
        style={NewsStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <ImgBox url="/news.jpeg" width="100%" height="100%" />
      </div>
      <Title title="최근경기" news={true} size="1.5rem" color="white" />
    </>
  );
};
export default News;
