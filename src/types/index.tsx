
// types/index.ts

export interface Match {
    opponent: string;
    isHome: boolean;
    type: string;
    datetime: string; // 모든 경기에 datetime이 포함되어 있다고 가정합니다.
    result?: string; // 최근 경기에만 결과가 포함될 수 있으므로, 선택적으로 표시합니다.
}

export interface MatchData {
    upcoming: Match[];
    recent: Match[];
}
