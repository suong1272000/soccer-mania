import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { parse } from 'cookie';
import { CSSProperties } from 'styled-components';
import Hero from '@/components/molecules/news/Hero';
import News from '@/components/molecules/news/News';
import MainContents from '@/components/organism/MainContents';

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

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  const MainStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  };
  return (
    <div style={MainStyle}>
      <Hero />
      <News />
      <MainContents />
    </div>
  );
};
export default Main;
