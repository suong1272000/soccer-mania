import { GetServerSideProps } from "next";
import { parse } from "cookie";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PlayerInfo } from "@/data/player";
import AddedButton from "@/components/atoms/Buttons/listButton/AddedButton";
import DeleteButton from "@/components/atoms/Buttons/listButton/DeleteButton";



export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<any> => {
	const { req } = context;
	const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
	console.log(cookies.success);
	const userAuth = cookies.success == "true";
	if (!userAuth) {
		return {
			redirect: {
				destination: "/login",
			},	
		};
	}
	return {
		props: {},
	};
};

const columns: GridColDef<(typeof rows)[number]>[] = [
	{ field: 'id', headerName: 'ID', width: 90 },
	{
	  field: 'jerseyNumber',
	  headerName: '번호',
	  type: 'number',
	  width: 150,
	  editable: true,
	},
	{
	  field: 'name',
	  headerName: '이름',
	  type: 'string',
	  width: 150,
	  editable: true,
	},
	{
	  field: 'age',
	  headerName: '나이',
	  type: 'number',
	  width: 110,
	  editable: true,
	},
	{
		field: 'birthday',
		headerName: '생일',
		type: 'string',
		width: 110,
		editable: true,
	  },
	  {
		field: 'position',
		headerName: '포지션',
		type: 'string',
		width: 110,
		editable: true,
	  },
  ];
  const rows = PlayerInfo;
  


const MemberList = () => {
  return (
	<Box sx={{ height: 400, width: '70%' }}>
	<DataGrid
	  rows={rows}
	  columns={columns}
	  initialState={{
		pagination: {
		  paginationModel: {
			pageSize: 5,
		  },
		},
	  }}
	  pageSizeOptions={[5]}
	  checkboxSelection
	  disableRowSelectionOnClick
	/>
	<Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
	<AddedButton />
	<DeleteButton />
	</Box>

  </Box>
  );
};

export default MemberList;
