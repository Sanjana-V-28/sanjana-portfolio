import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ mt: 8, py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Sanjana.V
        </Typography>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Sanjana V — Business Data Analytics. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="mailto:sanjana@email.com" underline="none">Email</Link>
          {' — '}
          <Link href="https://github.com" target="_blank" rel="noopener" underline="none">GitHub</Link>
          {' — '}
          <Link href="https://linkedin.com" target="_blank" rel="noopener" underline="none">LinkedIn</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
