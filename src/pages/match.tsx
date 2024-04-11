// pages/match.tsx
import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import fetchMatches from '../lib/fetchMatches';
import styled from 'styled-components';
import { MatchData } from '../types';

const MatchItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Result = styled.span<{ result?: string }>`
  color: ${(props) =>
    props.result === 'Win' ? 'blue' :
        props.result === 'Draw' ? 'black' : 'red'};
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req } = context;
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const userAuth = cookies.success == 'true';

    if (!userAuth) {
        return { redirect: { destination: '/login', permanent: false } };
    }

    const matchData:any = await fetchMatches();
    return { props: { matchData } };
};

const MatchPage = ({ matchData }: { matchData: MatchData }) => {
    // 날짜와 시간을 영국 현지 시간으로 포맷팅하는 함수
    const formatDatetime = (datetime: string) => {
        const date = new Date(datetime);
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London',
            hour12: true
        };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
    };

    return (
        <div>
            <h2>Upcoming Matches</h2>
            {matchData?.upcoming?.map((match, index) => (
                <MatchItem key={index}>
                    Manchester United vs {match.opponent} - {match.isHome ? "Home" : "Away"} - {match.type}
                    <br />
                    {formatDatetime(match.datetime)}
                </MatchItem>
            ))}
            <h2>Recent Matches</h2>
            {matchData?.recent?.map((match, index) => (
                <MatchItem key={index}>
                    Manchester United vs {match.opponent} - {match.isHome ? "Home" : "Away"} - {match.type}
                    <Result result={match.result}> - Result: {match.result}</Result>
                </MatchItem>
            ))}
        </div>
    );
};

export default MatchPage;

