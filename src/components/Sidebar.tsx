import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  HomeRounded,
  PeopleAltRounded,
  LocationOnRounded,
  LocalShippingRounded,
  StorefrontRounded,
  ReceiptRounded,
  AccountBalanceWalletRounded,
  ShowChartRounded,
  AssessmentRounded,
  SettingsRounded,
  LogoutRounded,
  Menu as MenuIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Inicio', icon: <HomeRounded />, selected: true },
    { text: 'Clientes', icon: <PeopleAltRounded /> },
    { text: 'Mapa de clientes', icon: <LocationOnRounded /> },
    { text: 'Monitoreo de Distribuidores', icon: <LocalShippingRounded /> },
    { text: 'Ventas', icon: <StorefrontRounded /> },
    { text: 'Pedidos', icon: <ReceiptRounded />, notification: '1' },
    { text: 'Préstamos', icon: <AccountBalanceWalletRounded /> },
    { text: 'Finanzas', icon: <ShowChartRounded />, hasSubmenu: true },
    { text: 'Reportes', icon: <AssessmentRounded />, hasSubmenu: true },
    { text: 'Configuración', icon: <SettingsRounded />, hasSubmenu: true },
  ];

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        backgroundColor: '#0F2167',
        color: 'white',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        width: 280,
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 3,
        mb: 1,
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            letterSpacing: '-0.5px',
            color: '#4B9FFF',
            fontSize: '1.25rem'
          }}
        >
          Smart<span style={{ color: 'white', fontWeight: 400 }}>water</span>
        </Typography>
      </Box>
      <List sx={{ 
        p: 0,
        px: 2,
        flex: 1,
      }}>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            disablePadding
            sx={{
              mb: 0.5,
              borderRadius: 2,
              overflow: 'hidden',
              backgroundColor: item.selected ? '#fff' : 'transparent',
              position: 'relative',
              '&:last-child': {
                mb: 0
              }
            }}
          >
            <ListItemButton
              sx={{
                py: 1.5,
                px: 2,
                '&:hover': {
                  backgroundColor: item.selected ? '#fff' : 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: item.selected ? '#0F2167' : 'white', 
                minWidth: 36,
                '& .MuiSvgIcon-root': {
                  fontSize: '1.4rem'
                }
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  sx: { 
                    fontWeight: item.selected ? 600 : 400,
                    fontSize: '0.875rem',
                    color: item.selected ? '#0F2167' : 'white'
                  }
                }}
              />
              {item.notification && (
                <Box
                  sx={{
                    backgroundColor: '#3B82F6',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ml: 1,
                  }}
                >
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
                    {item.notification}
                  </Typography>
                </Box>
              )}
              {item.hasSubmenu && (
                <Box
                  component="span"
                  sx={{
                    width: 0,
                    height: 0,
                    borderLeft: '4px solid transparent',
                    borderRight: '4px solid transparent',
                    borderTop: `4px solid ${item.selected ? '#0F2167' : 'rgba(255, 255, 255, 0.7)'}`,
                    ml: 1,
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 3 }}>
        <ListItemButton
          sx={{
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            },
            py: 1.5,
          }}
        >
          <ListItemIcon sx={{ 
            color: 'white', 
            minWidth: 36,
            '& .MuiSvgIcon-root': {
              fontSize: '1.4rem'
            }
          }}>
            <LogoutRounded />
          </ListItemIcon>
          <ListItemText 
            primary="Salir" 
            primaryTypographyProps={{
              sx: { 
                fontWeight: 400,
                fontSize: '0.875rem'
              }
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="abrir menú"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            left: 16,
            top: 16,
            zIndex: 1200,
            backgroundColor: '#0F2167',
            '&:hover': {
              backgroundColor: '#1a337e',
            },
          }}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
      )}
      <Box
        component="nav"
        sx={{
          width: { md: 280 },
          flexShrink: { md: 0 },
          height: '100vh',
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: 280,
                backgroundColor: '#0F2167',
                boxShadow: 'none',
                height: '100%',
              },
            }}
          >
            {drawerContent}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': {
                width: 280,
                backgroundColor: '#0F2167',
                border: 'none',
                boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
                height: '100%',
              },
            }}
            open
          >
            {drawerContent}
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Sidebar; 