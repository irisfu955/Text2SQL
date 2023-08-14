import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import  {TextField} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { borders } from '@mui/system';









export default function LandingPage() {
  return (
    <>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }}}/>
      <CssBaseline />
      
     
      <Container maxWidth="md" component="main" >
        <Typography variant="h2" gutterBottom align="center">
            Generate SQL with AI
        </Typography>
        <Typography variant="h4" gutterBottom align="center">
            Generate and explain optimized SQL queries using AI! Improve your skills and save time:
        </Typography>
       
      </Container>
      <Container align= 'center'>
      <Box sx={{width: 500,height: 200, border: 1, borderRadius:1,borderColor: 'primary.main'}}>
      <Typography variant='subtitle1'>
      find all users who live in California and have over 1000 credits
      </Typography>
      </Box>
      <Box sx={{width: 500,height: 250, border: 1, borderRadius:1,borderColor: 'primary.main'}}>
      <Typography variant='subtitle1'>
      SELECT * FROM users WHERE state='CA' AND credits {'>'} 1000; ...
      </Typography>
      </Box>
      <Button sx={{margin: 2}} variant="outlined" startIcon={<AutoAwesomeIcon />}>
            Try now!
        </Button>
        </Container>
    
    </>
  );
}