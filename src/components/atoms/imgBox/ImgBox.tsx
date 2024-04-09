import Image from 'next/image';
import { CSSProperties } from 'styled-components';

export type ImgBoxProps = {
  url: string;
  width: string;
  height: string;
  radius?: string;
};

const ImgBox = ({ url, width, height, radius }: ImgBoxProps) => {
  const ImgBoxStyle: CSSProperties = {
    position: 'relative',
    width: `${width}`,
    height: `${height}`,
    borderRadius: `${radius}`,
    overflow: 'hidden',
  };
  return (
    <div style={ImgBoxStyle}>
      <Image src={url} alt="" layout="fill" />
    </div>
  );
};
export default ImgBox;
