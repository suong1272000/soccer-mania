// pages/[matchId].tsx
import { useRouter } from 'next/router';

const MatchDetailPage = () => {
	const router = useRouter();
	const { matchId } = router.query;

	// 여기서 matchId를 사용하여 서버나 API에서 매치 상세 정보를 가져옵니다.
	// 예를 들어, fetch(`/api/matches/${matchId}`) 또는 비슷한 함수를 사용할 수 있습니다.

	return (
		<div>
			{/* 매치 상세 정보를 렌더링합니다. */}
			<h1>Match Details for {matchId}</h1>
			{/* 여기에 상세 정보를 표시합니다. */}
		</div>
	);
};

export default MatchDetailPage;

// pages/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
// ... 기존의 import 구문과 코드

const DataGridDemo = () => {
	const router = useRouter();

	const handleRowClick = (params) => {
		// 여기서 `params.id`는 클릭된 행의 `id` 필드를 가리킵니다.
		router.push(`/${params.id}`);
	};

	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGridDemo
				rows={rows}
				columns={columns}
				pageSize={5}
				onRowClick={handleRowClick}
				// ... 기존의 DataGrid 프로퍼티
			/>
		</Box>
	);
};

export default DataGridDemo;
