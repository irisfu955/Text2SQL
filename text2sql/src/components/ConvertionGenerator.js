import * as React from 'react';
import { Container } from "@mui/material";
import{ Box} from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
export default function ConvertionGenerator(){
    return(
        <Container align= 'center' sx={{marginTop:3}}>
            <Typography variant='h3' color='primary' sx={{margin: 2}}>
                SQL Generator
            </Typography>               
            <Box sx={{width: 500,height: 200, border: 1, borderRadius:1,borderColor: 'primary.main'}}>
                <Typography variant='subtitle1'>
                </Typography>
            </Box>
            <Box sx={{width: 500,height: 250, border: 1, borderRadius:1,borderColor: 'primary.main'}}>
                <Typography variant='subtitle1'>
                </Typography>
            </Box>
            <Button sx={{margin: 2}} variant="outlined" >
              Generate!
            </Button>
        </Container>
    );
}