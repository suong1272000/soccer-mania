import React from 'react';
import Button from '@mui/material/Button';

const DeleteButton = ({ onClick }:any) => {
  return (
    <Button variant="outlined" onClick={onClick}>
      삭제
    </Button>
  );
};

export default DeleteButton;