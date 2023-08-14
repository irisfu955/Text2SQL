import SideBar from '../components/Sidebar';
import{ CssBaseline} from '@mui/material';
import ConvertionGenerator from '../components/ConvertionGenerator';
import Account from "../components/Account";
import Welcome from "../components/Welcome";
import { Box } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  
export default function DashBoardPage(){
    return(
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <SideBar />
            <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}>
                <Router>
                    <Switch>
                    <Route path="/dashboard" exact  component={Welcome}/>
                    <Route path="/dashboard/sqlgenerator" component={ConvertionGenerator} />
                    <Route path="/dashboard/account" component={Account } />
                    </Switch>
                </Router>
            </Box>
        </Box>
    );
};