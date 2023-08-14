import { createTheme } from '@mui/material/styles';
import { teal,indigo} from '@mui/material/colors';

export default function UserTheme(){
    return (
        createTheme({
            palette: {
              primary: {
                light: teal[50],
                main:teal[500],
                dark:teal[900]
              },
              secondary: indigo,
              background:{
                default: teal[50],
              },
            },
          })
    )
};
 