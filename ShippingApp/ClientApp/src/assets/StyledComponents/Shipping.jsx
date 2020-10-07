//#region Imports

// Import react styled components
import styled from 'styled-components';

// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

//#endregion 

//#region Exported Styled Components

export const Layout = styled.section`
    margin: 5%;
    display: flex;
    justify-content: center;
`

export const StyledButton = styled(Button)`
  float: right;
`

export const Heading = styled.h1`
    color: white;
    margin-bottom: 30px;
`

export const StyledTextField = styled(TextField)`
#search-input,  
MuiFormControl-root,
label.MuiFormLabel-root{
  color: white !important;
}
@media (max-width: 425px) {
  label.MuiFormLabel-root{
    font-size: 12px !important;
  }
  input#search-input {
    font-size: 12px !important;
  }
}
`;


//#endregion 