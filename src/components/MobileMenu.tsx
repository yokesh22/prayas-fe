import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Typography,
  Divider
} from '@mui/material';

interface MobileMenuProps {
  navItems: {
    name: string;
    active: boolean;
    path: string;
  }[];
  open?: boolean;
  onClose?: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, open = false, onClose }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': { 
          width: '80%', 
          maxWidth: '300px',
          boxSizing: 'border-box',
          bgcolor: '#ffffff',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        },
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={onClose}>
          {/* Use inline SVG instead of MUI icon to avoid context issues */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </IconButton>
      </Box>
      
      <Divider />
      
      <List sx={{ pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path}
              onClick={onClose}
              sx={{
                py: 2,
                borderLeft: item.active ? '4px solid' : 'none',
                borderColor: '#ffcb13',
                bgcolor: item.active ? 'rgba(255, 203, 19, 0.1)' : 'transparent'
              }}
            >
              <ListItemText 
                primary={
                  <Typography 
                    sx={{ 
                      fontWeight: item.active ? 700 : 400,
                      fontSize: '18px',
                      pl: item.active ? 1 : 0
                    }}
                  >
                    {item.name}
                  </Typography>
                } 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
