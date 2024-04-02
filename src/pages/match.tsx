// pages/index.tsx
import React from 'react';
import '../styles/global.css';
import {borderBottom} from "@mui/system";

interface Match {
	id: number;
	time: string;
	homeTeam: string;
	awayTeam: string;
}

const matches = [
	{ id: 1, time: '오전 3:30', homeTeam: '뉴캐슬', awayTeam: '에버튼' },
	{ id: 2, time: '오전 3:30', homeTeam: '노팅엄 포레스트', awayTeam: '풀럼' },
	// 여기서부터 추가된 가짜 데이터입니다
	{ id: 3, time: '오전 3:45', homeTeam: '본머스', awayTeam: '크리스탈 팰리스' },
	{ id: 4, time: '오전 3:45', homeTeam: '번리', awayTeam: '울버햄튼' },
	{ id: 5, time: '오전 4:15', homeTeam: '웨스트 햄', awayTeam: '토트넘' },
	{ id: 6, time: '오전 3:30', homeTeam: '아스날', awayTeam: '루턴' },
	{ id: 7, time: '오전 3:30', homeTeam: '브렌트포드', awayTeam: '브라이튼' },
	{ id: 8, time: '오전 4:15', homeTeam: '맨시티', awayTeam: '애스턴 빌라' },
	{ id: 9, time: '오전 3:30', homeTeam: '리즈', awayTeam: '사우스햄튼' },
	{ id: 10, time: '오전 3:30', homeTeam: '리버풀', awayTeam: '첼시' },
	{ id: 11, time: '오전 3:45', homeTeam: '레스터 시티', awayTeam: '맨체스터 유나이티드' },
	{ id: 12, time: '오전 3:45', homeTeam: '웨스트 브롬위치', awayTeam: '스완지' },
	{ id: 13, time: '오전 4:15', homeTeam: '셰필드 유나이티드', awayTeam: '노리치' },
	{ id: 14, time: '오전 3:30', homeTeam: '왓퍼드', awayTeam: '더비 카운티' },
	{ id: 15, time: '오전 3:30', homeTeam: '밀월', awayTeam: '프레스턴' },
	{ id: 16, time: '오전 4:15', homeTeam: '블랙번', awayTeam: '큐피알' },
	{ id: 17, time: '오전 3:30', homeTeam: '카디프 시티', awayTeam: '헐 시티' },
	{ id: 18, time: '오전 3:30', homeTeam: '버밍엄', awayTeam: '코벤트리' },
	{ id: 19, time: '오전 3:45', homeTeam: '스토크 시티', awayTeam: '풋볼 유나이티드' },
	{ id: 20, time: '오전 3:45', homeTeam: '풀럼', awayTeam: '미들즈브러' },
	{ id: 21, time: '오전 4:15', homeTeam: '리딩', awayTeam: '브리스톨 시티' },
	{ id: 22, time: '오전 3:30', homeTeam: '선덜랜드', awayTeam: '포츠머스' }
];
``


const MatchComponent: React.FC<{ match: Match }> = ({ match }) => {
	return (
		<div className="match">
			<span>{match.time}</span>
			<span>{match.homeTeam}</span>
			<span>vs</span>
			<span>{match.awayTeam}</span>
		</div>
	);
};

const HomePage: React.FC = () => {
	return (
		<div className="matches-list">
			{matches.map(match => (
				<MatchComponent key={match.id} match={match} />
			))}
		</div>
	);
};

export default HomePage;

// styles/global.css (이 스타일 시트는 _app.tsx에서 import 할 수 있습니다)
// .match {
// 	display: 'flex';
// 	justifyContent: 'space-between';
// 	padding: '10px';
// 	borderBottom: '1px solid #ddd';
// }
//
// .matchesList {
// 	maxWidth: '600px';
// 	margin: '0 auto';
// }
