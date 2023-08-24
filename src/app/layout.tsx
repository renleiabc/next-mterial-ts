import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/compontents/ThemeRegistry/ThemeRegistry';
import { Providers } from '@/store/providers';
import RouteList from '@/compontents/RouteList';
import '@/assets/index.scss';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5'
};

const DRAWER_WIDTH = 240;

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon }
];

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <Drawer
              sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: DRAWER_WIDTH,
                  boxSizing: 'border-box',
                  top: ['48px', '56px', '64px'],
                  height: 'auto',
                  bottom: 0
                }
              }}
              variant="permanent"
              anchor="left"
            >
              <Divider />
              <RouteList></RouteList>
              <Divider sx={{ mt: 'auto' }} />
              <List>
                {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                bgcolor: 'background.default',
                ml: `${DRAWER_WIDTH}px`,
                mt: ['48px', '56px', '64px']
              }}
            >
              <Paper
                sx={{
                  p: 3
                }}
                style={{ maxHeight: 'calc(100vh - 64px)', overflow: 'auto' }}
              >
                {children}
              </Paper>
            </Box>
          </ThemeRegistry>
        </body>
      </html>
    </Providers>
  );
}
