import LandingPage from "./pages/LandingPage";
import DashBoardPage from "./pages/DashBoardPage";
import SigninPage from "./pages/SigninPage";
import PricingPage from "./pages/PricingPage";
import SuppotPage from "./pages/SupportPage";
import UserTheme from "./UserTheme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/Navbar";
import {CssBaseline} from "@mui/material";
import { GlobalStyles } from "@mui/material";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const theme = UserTheme();
function App() {
  return (
    <Router>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' }}}/>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
       <Switch>
          <Route path="/dashboard">
            <DashBoardPage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Route path="/pricing">
            <PricingPage />
          </Route>
          <Route path="/support">
            <SuppotPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
