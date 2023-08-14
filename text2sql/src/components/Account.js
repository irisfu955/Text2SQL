import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Account() {
  return (
    <Container align='center' sx={{mt: 5}}>
        <Typography variant='h3'>
            Account
        </Typography>
    <Card sx={{ width:400 , height: 500}}>
      <CardContent>
        <Typography align='left' variant='h5' color="text.secondary" gutterBottom>
        Hello, customer!
        </Typography>
      </CardContent>
      <CardActions>
      <List >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RocketLaunchIcon />
              </ListItemIcon>
              <ListItemText primary="Upgrade subscription" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Contact support" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </CardActions>
    </Card>
    </Container>
  );
}