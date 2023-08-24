'use client';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { usePathname } from 'next/navigation';

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Starred', href: '/starred', icon: StarIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
  { text: 'About', href: '/about', icon: ChecklistIcon }
];
const routeList = () => {
  const [selected, setSelected] = useState(false);
  const pathname = usePathname();
  console.log('🚀 ~ file: routeList.tsx:24 ~ routeList ~ pathname:', pathname);
  return (
    <List>
      {LINKS.map(({ text, href, icon: Icon }) => (
        <ListItem key={href} disablePadding>
          <ListItemButton
            selected={selected}
            onClick={() => setSelected((prev) => !prev)}
            component={Link}
            href={href}
            sx={{
              bgcolor: href === pathname ? 'background.default' : ''
            }}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
export default routeList;
