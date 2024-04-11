const fetchMatches = async () => {
    return {
        upcoming: [
            { opponent: "Chelsea", isHome: true, type: "League", datetime: "2024-05-01T15:00:00Z" },
            { opponent: "Arsenal", isHome: false, type: "Cup", datetime: "2024-05-04T12:30:00Z" },
            { opponent: "Liverpool", isHome: true, type: "League", datetime: "2024-05-08T20:00:00Z" },
            { opponent: "Manchester City", isHome: false, type: "League", datetime: "2024-05-12T14:00:00Z" },
            { opponent: "Tottenham Hotspur", isHome: true, type: "Cup", datetime: "2024-05-15T19:45:00Z" },
            { opponent: "Everton", isHome: false, type: "League", datetime: "2024-05-22T17:30:00Z" },
            { opponent: "Leicester City", isHome: true, type: "League", datetime: "2024-05-26T15:00:00Z" },
        ],
        recent: [
            { opponent: "Watford", isHome: false, type: "League", result: "Win" },
            { opponent: "Norwich City", isHome: true, type: "League", result: "Draw" },
            { opponent: "Brighton", isHome: false, type: "League", result: "Loss" },
            { opponent: "Crystal Palace", isHome: true, type: "League", result: "Win" },
            { opponent: "Wolves", isHome: false, type: "Cup", result: "Win" },
            { opponent: "Burnley", isHome: true, type: "League", result: "Draw" },
            { opponent: "Southampton", isHome: false, type: "Cup", result: "Loss" },
        ],
    };
};

export default fetchMatches;
