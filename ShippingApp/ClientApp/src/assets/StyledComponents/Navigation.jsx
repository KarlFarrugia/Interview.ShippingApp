//#region Imports

// Import react styled components
import styled from 'styled-components';

// @material-ui/core components
import Select from "@material-ui/core/Select";
import FormControlLabel from '@material-ui/core/FormControlLabel';

//#endregion 

//#region Exported Styled Components

export const LogoImg = styled.img`    
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
`

export const NavbarPosition = styled.div`
    z-index: 99999;
    display: contents;
`

export const NavbarTitle = styled.div`
    display: table-caption;
    width: max-content;
    margin-left: 5%;
    margin-bottom: 10px;
    font-size: larger;
    color: white;
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

export const SecondNavigationItem = styled.div`
    float: right;
    @media (max-width: 425px) {
        font-size: 12px !important;
    }
`;

export const AdultCheckbox = styled.div`
    position: absolute;
    margin-top: -35px;
    margin-left: -40px;
    @media (min-width: 2000px) {
        margin-left: 60px;
    }
    @media (max-width: 360px) {
        margin-left: -60px;
    }
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

//#endregion 