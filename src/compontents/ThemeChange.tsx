'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
const themeChange = (props: {
  toggleTheme: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const handleChangeTheme = () => {
    props.toggleTheme();
  };
  return (
    <AppBar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar sx={{ backgroundColor: 'background.paper' }}>
        <DashboardIcon
          sx={{
            color: '#444',
            mr: 2,
            transform: 'translateY(-2px)'
          }}
        />
        <Typography variant="h6" noWrap component="div" color="black">
          Next.js App Router
        </Typography>

        <WbSunnyIcon
          onClick={handleChangeTheme}
          sx={{
            color: '#444',
            mx: 2,
            transform: 'translateY(-2px)',
            cursor: 'pointer'
          }}
        />
        <Brightness2Icon
          onClick={handleChangeTheme}
          sx={{
            color: '#444',
            mx: 2,
            transform: 'translateY(-2px)',
            cursor: 'pointer'
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
export default themeChange;
