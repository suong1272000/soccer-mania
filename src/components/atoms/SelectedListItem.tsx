import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

const SelectedListItem = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(true);
  const [loginID, setLoginID] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const logoutAction = () => {
    document.cookie =
      'success=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('id');
    setLoginID(false);
    router.push('/login');
  };

  React.useEffect(() => {
    localStorage.getItem('id') === 'mega'
      ? setLoginID(true)
      : setLoginID(false);
  }, []);

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 240,
          bgcolor: 'background.paper',
          display: 'block',
          position: 'fixed',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{
              height: '70px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            메뉴
          </ListSubheader>
        }
      >
        <ListItemButton
          sx={{
            width: '240px',
          }}
        >
          {loginID ? (
            <ListItemText primary="로그아웃" onClick={logoutAction} />
          ) : (
            <ListItemText
              primary="로그인"
              onClick={() => router.push('/login')}
            />
          )}
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="홈" onClick={() => router.push('/main')} />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="매치" onClick={() => router.push('/match')} />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="멤버" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                primary="리스트"
                onClick={() => router.push('/member/memberList')}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};
export default SelectedListItem;
