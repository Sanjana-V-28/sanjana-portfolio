import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const floatVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <motion.section id="hero" initial="hidden" animate="visible" variants={floatVariant}>
      <Box sx={{ pt: 12, minHeight: '100vh', position: 'relative', overflow: 'hidden', background: theme.palette.mode === 'light' ? 'linear-gradient(135deg, rgba(102,126,234,0.06), rgba(118,75,162,0.04))' : 'transparent' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 2 }}>
                Hi, I'm <Box component="span" sx={{ background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sanjana</Box>
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2 }}>Business Data Analytics Graduate</Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4 }}>Passionate about transforming data into actionable insights using SQL, Python, Power BI, and Tableau</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get In Touch</Button>
                <Button variant="outlined" color="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>View Projects</Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button component="a" href="https://github.com" target="_blank"></Button>
                <Button component="a" href="https://linkedin.com" target="_blank"></Button>
                <Button component="a" href="mailto:sanjana@email.com"></Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            <motion.div initial={{ rotateY: 10, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <Box sx={{ fontSize: 72, textAlign: 'center', background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                <i className="fas fa-chart-line"></i>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        </Container>
      </Box>
    </motion.section>
  );
};
