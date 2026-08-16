import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion } from 'framer-motion';
import { useAppTheme } from '../theme/ThemeContext';

export const ThemeToggler: React.FC = () => {
  const { mode, toggleMode } = useAppTheme();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <motion.div whileTap={{ scale: 0.9 }}>
        <IconButton color="inherit" onClick={toggleMode} aria-label="toggle theme">
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </motion.div>
    </Tooltip>
  );
};

export default ThemeToggler;
