import { CSSProperties } from 'styled-components';

type TitleProps = {
  title: string;
  size: string;
  color?: string;
  news: boolean;
};

const Title = ({ title, size, color, news }: TitleProps) => {
  const TitleStyle: CSSProperties = {
    fontSize: `${size}`,
    color: `${color}`,
  };
  const NewsTextStyle: CSSProperties = {
    position: 'absolute',
    bottom: '10px',
    left: '20px',
    fontSize: `${size}`,
    color: `${color}`,
    zIndex: '1',
  };
  return <h2 style={news ? NewsTextStyle : TitleStyle}>{title}</h2>;
};
export default Title;
