import * as React from 'react';
import { GetServerSideProps } from 'next';
import { parse } from 'cookie';

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const { req } = context;
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  console.log(cookies.success);
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

const Main = () => {
  return <div>메인페이지 입니다</div>;
};
export default Main;
