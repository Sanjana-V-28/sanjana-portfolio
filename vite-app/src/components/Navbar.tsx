import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThemeToggler from './ThemeToggler';

export const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = React.useState(false);

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <AppBar position="fixed" elevation={0} color="transparent" sx={{ top: 20, bgcolor: 'transparent', backdropFilter: 'blur(6px)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 800, cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
            Sanjana<span style={{ color: theme.palette.primary.main }}>.</span>V
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Box component="nav" sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {links.map(l => (
                  <Button key={l.id} color="inherit" onClick={() => scrollToSection(l.id)}>
                    {l.label}
                  </Button>
                ))}
              </Box>
            )}

            <ThemeToggler />

            {isMobile && (
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { borderRadius: 2, m: 2 } }}>
        <List>
          {links.map(l => (
            <ListItem key={l.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(l.id)}>{l.label}</ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};
