import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Button, Card, CardContent, Grid, Typography, Select, MenuItem, Avatar, Stack } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { AccountCircle } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategoryIcon from '@mui/icons-material/Category';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const drawerWidth = 240;

const routes = [
  { label: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
  { label: "Customers", path: "/customers", icon: <PeopleAltIcon /> },
  { label: "Products", path: "/products", icon: <StorefrontIcon /> },
  { label: "Categories", path: "/categories", icon: <CategoryIcon /> },
  { label: "Admins", path: "/admins", icon: <AdminPanelSettingsIcon /> },
  { label: "Settings", path: "/settings", icon: <SettingsIcon /> },
];

const ProductsComponant = () => <ResponsiveDrawer />;

export default ProductsComponant;

export function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("en");

  const handleDrawerClose = () => setMobileOpen(false);
  const handleLanguageChange = (event) => setLanguage(event.target.value);

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", alignItems: "center" }}>
      <Box>
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 40, height: 40, borderRadius: 2, bgcolor: "blue", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>SM</Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontWeight: 1000, fontSize: 16 }}>Souq Mubasher</Typography>
            <Typography sx={{ fontWeight: 'lighter', fontSize: 13 }}>Admin panel</Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          {routes.map((r) => (
            <ListItemButton component={NavLink} to={r.path} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {r.icon}
              <ListItemText primary={r.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Divider />
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, py: 2, cursor: "pointer" }}>
          <IconButton color="inherit"><AccountCircle /></IconButton>
          <Typography>Log Out</Typography>
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, bgcolor: "white", color: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 24, fontWeight: 800 }}>Products</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Select value={language} onChange={handleLanguageChange} size="small">
              <MenuItem value="en"><img src="https://flagcdn.com/w20/us.png" alt="English" width={20} height={14} /> English</MenuItem>
              <MenuItem value="kr"><img src="https://flagcdn.com/w20/kr.png" alt="Korean" width={20} height={14} /> Korean</MenuItem>
              <MenuItem value="uz"><img src="https://flagcdn.com/w20/uz.png" alt="Uzbek" width={20} height={14} /> Uzbek</MenuItem>
            </Select>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ bgcolor: "#fff", px: 1.5, py: 0.5, borderRadius: 1, boxShadow: "0 0 3px rgba(0,0,0,0.1)", cursor: "pointer" }}>
              <Avatar src="https://i.pravatar.cc/40" sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography variant="body2" fontWeight={500}>Admin</Typography>
                <Typography variant="caption">ADMIN</Typography>
              </Box>
              <ArrowDropDownIcon fontSize="small" />
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerClose} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}>
          {drawer}
        </Drawer>
        <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth } }} open>
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Typography sx={{ fontWeight: 800, fontSize: 16 }}>Products</Typography>
        <Typography sx={{ mb: 2 }}>Manage your product listing</Typography>

       <Box>
        
       </Box>
        
        <Box sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
        >
          Back
        </Button>
      </Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};
