// pages/index.tsx 또는 다른 컴포넌트 파일
import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { GridRowParams } from '@mui/x-data-grid/models';

const DataGridDemo = () => {
    const router = useRouter();

    const handleRowClick = (params: GridRowParams) => {
        // 클릭된 행의 `id` 값을 사용하여 동적 경로로 이동
        router.push(`/${params.id}`);
    };

    // 여기서 `rows`와 `columns`는 이미 정의되어 있다고 가정합니다.

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                onRowClick={handleRowClick}
                // 필요한 나머지 DataGrid 프로퍼티들...
            />
        </Box>
    );
};

export default DataGridDemo;
