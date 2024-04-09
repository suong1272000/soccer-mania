import { CSSProperties } from 'styled-components';

type TextProps = {
  text: string;
  width: string;
  height: string;
  size:string
};

const Text = ({ text, width, height,size }: TextProps) => {
  const TextStyle: CSSProperties = {
    width: `${width}`,
    height: `${height}`,
    fontSize: `${size}`,
  };
  return <p style={TextStyle}>{text}</p>;
};
export default Text;
