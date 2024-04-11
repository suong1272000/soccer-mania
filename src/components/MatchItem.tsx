// // components/MatchItem.tsx
// import React from 'react';
// import styled from 'styled-components';
// import { Match } from '../types';
//
// interface MatchItemProps {
//     match: Match;
// }
//
// const Result = styled.span<{ result?: string }>`
//   color: ${(props) =>
//     props.result === 'Win' ? 'blue' :
//         props.result === 'Draw' ? 'black' : 'red'};
// `;
//
// const TeamEmblem = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 8px;
// `;
//
// const MatchItem: React.FC<MatchItemProps> = ({ match }) => (
//     <MatchContainer>
//         <TeamEmblem src={`/emblems/${match.opponent}.png`} alt={`${match.opponent} emblem`} />
//         <span>{match.opponent}</span> - <span>{match.isHome ? "Home" : "Away"}</span> - <span>{match.type}</span>
//         {match.result && <Result result={match.result}> - Result: {match.result}</Result>}
//     </MatchContainer>
// );
//
// export default MatchItem;
//
// const MatchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
//   font-family: Arial, sans-serif;
// `;
