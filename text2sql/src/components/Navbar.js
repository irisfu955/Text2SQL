import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



export default function NavBar(){
    return(
      <AppBar
      position="static"
      elevation={0}
      color='transparent'
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="primary.dark" noWrap sx={{ flexGrow: 1 }}>
          TEXT2SQL
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/dashboard"
            sx={{ my: 1, mx: 1.5 }}
          >
            Dashboard
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/pricing"
            sx={{ my: 1, mx: 1.5 }}
          >
            Pricing
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/support"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
        <Button href="/signin" variant="outlined" sx={{ my: 1, mx: 1.5 }} color='success'>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    );
}