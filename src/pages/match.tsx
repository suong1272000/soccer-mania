import { GetServerSideProps } from 'next';
import { parse } from 'cookie';

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const { req } = context;
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const userAuth = cookies.success == 'true';
  if (!userAuth) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: {},
  };
};
const Match = () => {
  return <div>매치 페이지 입니다.</div>;
};
export default Match;
