import Title from '@/components/atoms/Labels/title/Title';
import ImgBox from '@/components/atoms/imgBox/ImgBox';
import Text from '@/components/atoms/Labels/text/Text';

const Hero = () => {
  return (
    <>
      <ImgBox url="/hero.jpg" width="100%" height="600px" radius="8px" />
      <Title title="세계 최고의 이야기" size="2.5rem" />
      <Text
        width="50%"
        height="auto"
        size="1.15rem"
        text="맨체스터 유나이티드는 스포츠계에서 유일무이한 이야기를 전합니다. 그렇기에 전세계적으로 많은 사람들이 우러러 보는 유명 구단이 될 수 있었습니다. 승리와 고난의 이야기, 그리고 유서 깊은 공격 축구, 재미있는 축구에 대한 이야기로 할리우드 블록버스터 영화에서나 볼 듯한 극적인 엔딩을 선사합니다."
      />
    </>
  );
};
export default Hero;
