import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  Select,
  MenuItem,
  IconButton,
  useTheme,
  useMediaQuery,
  Badge,
} from '@mui/material';
import { Add, Remove, Home, NotificationsRounded, MoreVert, KeyboardArrowDown } from '@mui/icons-material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1', value1: 1500, value2: 900 },
  { name: '2', value1: 1400, value2: 900 },
  { name: '3', value1: 300, value2: 400 },
  { name: '4', value1: 900, value2: 1400 },
  { name: '5', value1: 1400, value2: 1600 },
];

const clients = [
  { 
    name: 'Daniela Ayala', 
    date: '20/01/2023', 
    amount: '100 Bs.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  { 
    name: 'Rubén González', 
    date: '20/01/2023', 
    amount: '100 Bs.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  { 
    name: 'Mariana Reyes', 
    date: '20/01/2023', 
    amount: '100 Bs.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  { 
    name: 'Julio Espinoza', 
    date: '20/01/2023', 
    amount: '100 Bs.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
];

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        p: { xs: 3, md: 5 }, 
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        pt: { xs: 8, md: 4 },
        pb: { xs: 4, md: 5 },
        position: 'relative',
        height: '100vh',
        overflow: 'auto'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 24, md: 20 },
          right: { xs: 24, md: 32 },
          zIndex: 10
        }}
      >
        <IconButton
          sx={{
            backgroundColor: '#fff',
            width: 40,
            height: 40,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            '&:hover': {
              backgroundColor: '#f8f9fa'
            }
          }}
        >
          <Badge
            variant="dot"
            color="error"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#EF4444',
                minWidth: '8px',
                height: '8px',
                top: 4,
                right: 4
              }
            }}
          >
            <NotificationsRounded 
              sx={{ 
                color: '#0F2167',
                fontSize: '1.5rem'
              }} 
            />
          </Badge>
        </IconButton>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 3,
        gap: 1
      }}>
        <Home sx={{ color: '#1a237e' }} />
        <Typography 
          variant="h5" 
          component="h1" 
          sx={{ 
            fontWeight: 500,
            fontSize: '1.25rem',
            color: '#1a237e'
          }}
        >
          Inicio
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: 'Clientes nuevos', value: '18', trend: '+8.2%' },
          { title: 'Préstamos activos', value: '25', trend: '+8.2%' },
          { title: 'Pedidos totales', value: '1,236', trend: '+8.2%' },
          { title: 'Ingresos totales', value: '1,783', unit: 'Bs', trend: '+8.2%' }
        ].map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%', 
                borderRadius: '16px',
                boxShadow: 'none',
                border: '1px solid rgba(230, 232, 240, 0.8)',
                p: 1.5
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography 
                  color="textSecondary" 
                  sx={{ 
                    fontSize: '0.875rem', 
                    fontWeight: 500,
                    mb: 1.5,
                    color: '#64748B'
                  }}
                >
                  {stat.title}
                </Typography>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#1E293B', 
                    fontSize: '2rem',
                    mb: 1.5,
                    letterSpacing: '-0.5px'
                  }}
                >
                  {stat.value}{stat.unit}
                </Typography>
                <Box 
                  sx={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#DCFCE7',
                    borderRadius: '8px',
                    px: 1.5,
                    py: 0.75
                  }}
                >
                  <Typography 
                    sx={{ 
                      color: '#059669',
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    {stat.trend} En el último mes
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography 
        variant="h6" 
        sx={{ 
          mb: 3,
          fontWeight: 600,
          fontSize: '1.25rem',
          color: '#1E293B'
        }}
      >
        Acciones rápidas
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              p: 3, 
              height: '100%', 
              minHeight: { xs: 400, md: 'auto' },
              borderRadius: '24px',
              boxShadow: 'none',
              border: '1px solid rgba(230, 232, 240, 0.8)',
              backgroundColor: '#fff',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mb: 3
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: '#1E293B'
                  }}
                >
                  Clientes
                </Typography>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    color: '#94A3B8',
                    fontSize: '0.875rem',
                    fontWeight: 400
                  }}
                >
                  Vista rápida
                </Typography>
              </Box>
              <IconButton size="small">
                <MoreVert sx={{ color: '#94A3B8' }} />
              </IconButton>
            </Box>
            <Box 
              sx={{ 
                border: '1px solid #2563EB',
                borderRadius: '24px',
                overflow: 'hidden',
                p: 3,
                width: '100%'
              }}
            >
              {clients.map((client, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    py: 2.5,
                    width: '100%',
                    '&:not(:last-child)': {
                      borderBottom: '1px dotted rgba(226, 232, 240, 0.8)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, mr: 4 }}>
                    <Avatar 
                      src={client.image}
                      sx={{ 
                        width: 44,
                        height: 44,
                        mr: 2,
                        flexShrink: 0
                      }}
                    />
                    <Box>
                      <Typography 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: '0.9375rem',
                          color: '#1E293B',
                          lineHeight: 1.2
                        }}
                      >
                        {client.name.split(' ')[0]}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          color: '#64748B',
                          mt: 0.5
                        }}
                      >
                        {client.name.split(' ')[1]}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, minWidth: 'auto' }}>
                    <Box
                      sx={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '12px',
                        border: '1px solid #E2E8F0',
                        py: 1,
                        px: 3,
                        minWidth: '120px',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography 
                        sx={{ 
                          fontSize: '0.8125rem',
                          color: '#64748B',
                          fontWeight: 500
                        }}
                      >
                        {client.date}
                      </Typography>
                    </Box>
                    <Box 
                      sx={{ 
                        backgroundColor: '#0F2167',
                        borderRadius: '8px',
                        px: 3,
                        py: 1,
                        minWidth: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography 
                        sx={{ 
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          color: 'white',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {client.amount}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              p: 3, 
              height: '100%',
              borderRadius: '24px',
              boxShadow: 'none',
              border: '1px solid rgba(230, 232, 240, 0.8)',
              backgroundColor: '#fff'
            }}
          >
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  color: '#1E293B'
                }}
              >
                Realizar pedido
              </Typography>
              <IconButton size="small">
                <MoreVert sx={{ color: '#94A3B8' }} />
              </IconButton>
            </Box>
            <Box component="form" sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
              <Select 
                fullWidth 
                defaultValue="" 
                displayEmpty 
                IconComponent={KeyboardArrowDown}
                sx={{ 
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  height: 48,
                  '& .MuiOutlinedInput-notchedOutline': { 
                    borderColor: '#E2E8F0'
                  },
                  '& .MuiSelect-icon': {
                    color: '#94A3B8'
                  }
                }}
              >
                <MenuItem value="" disabled>
                  Cliente
                </MenuItem>
              </Select>
              <Select 
                fullWidth 
                defaultValue="" 
                displayEmpty 
                IconComponent={KeyboardArrowDown}
                sx={{ 
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  height: 48,
                  '& .MuiOutlinedInput-notchedOutline': { 
                    borderColor: '#E2E8F0'
                  },
                  '& .MuiSelect-icon': {
                    color: '#94A3B8'
                  }
                }}
              >
                <MenuItem value="" disabled>
                  Botellón de 20 Lts
                </MenuItem>
              </Select>
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1
              }}>
                <Box sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  p: 1,
                  width: '200px'
                }}>
                  <Typography sx={{ 
                    color: '#64748B',
                    fontSize: '0.875rem',
                    pl: 1
                  }}>
                    Cantidad
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    ml: 'auto'
                  }}>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: '#94A3B8',
                        p: 0.5
                      }}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography sx={{ 
                      mx: 2,
                      color: '#1E293B',
                      fontWeight: 500
                    }}>
                      1
                    </Typography>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        color: '#94A3B8',
                        p: 0.5
                      }}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ 
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  px: 3,
                  py: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <Typography sx={{ 
                    fontWeight: 500,
                    color: '#1E293B'
                  }}>
                    15
                  </Typography>
                  <Typography sx={{ 
                    color: '#64748B'
                  }}>
                    Bs
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ 
                  mt: 2,
                  textTransform: 'none',
                  fontWeight: 500,
                  borderRadius: '12px',
                  backgroundColor: '#2563EB',
                  '&:hover': {
                    backgroundColor: '#1D4ED8'
                  },
                  py: 1.5,
                  fontSize: '0.875rem'
                }}
              >
                Realizar pedido
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper 
            sx={{ 
              height: '100%',
              borderRadius: '24px',
              boxShadow: 'none',
              border: '1px solid rgba(230, 232, 240, 0.8)',
              backgroundColor: '#fff'
            }}
          />
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper 
          sx={{ 
            p: 4,
            height: { xs: 400, sm: 400, md: 450 },
            borderRadius: '16px',
            boxShadow: 'none',
            border: '1px solid rgba(230, 232, 240, 0.8)',
            overflow: 'hidden',
            mt: { xs: 0, md: 0 }
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barGap={12} margin={{ top: 30, right: 40, left: 30, bottom: 30 }}>
              <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12 }} 
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12 }}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #E5E7EB',
                  borderRadius: 8,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              />
              <Bar 
                dataKey="value1" 
                fill="#0F2167" 
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
              <Bar 
                dataKey="value2" 
                fill="#2563EB" 
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Dashboard; 