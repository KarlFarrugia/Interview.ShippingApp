//#region Imports

// Import react styled components
import styled from 'styled-components';

// @material-ui/core components
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//#endregion 

//#region Exported Styled Components

export const LogoImg = styled.img`    
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
`

export const NavigationLogoImg = styled.img` 
    width: 100px;
    height: 110px;
    padding-top: 20px;
`
export const NavbarPosition = styled.div`
    z-index: 99999;
    display: contents;
`

export const NavigationItem = styled.span`    
    margin-right: 50px;
`;

export const NavigationLinkText = styled.span`    
    color: white;
    @media (max-width: 425px) {
        font-size: 12px;
    }
`;

export const NavigationLine = styled.div`    
    border: 1px solid white;
    width: 98%;
    margin-left: 1%;
`;

export const NavigationSpacer = styled.div`
    margin-bottom: 10px;
`;

export const StyledSelect = styled(Select)`
    .MuiSelect-root,
    .Mui-focused,
    input#genre,
    label.MuiFormLabel-root{
        color: white !important;
    }
    @media (max-width: 425px) {
        font-size: 12px !important;
    }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
    span.MuiFormControlLabel-label{
        color: white;
    }
    @media (max-width: 425px) {
        
        .MuiFormControlLabel-label {
            font-size: 12px !important;
        }
    }
`;

export const StyledFormControl = styled(FormControl)`
    margin-top: 45px !important;
`;

//#endregion 