//#region Imports

// Import react components
import React from 'react';
import { Link } from "react-router-dom";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";

// Import image
import SiteLogo from "../../assets/images/site_logo.png";
import Cargo4YouLogo from "../../assets/images/Cargo4YouLogo.png";
import ShipFasterLogo from "../../assets/images/ShipFasterLogo.png";
import MaltaShipLogo from "../../assets/images/MaltaShipLogo.png";

// Import material-ui core components
import MenuItem from "@material-ui/core/MenuItem";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Import styled components
import {StyledSelect, StyledFormControl, LogoImg, NavbarPosition, NavigationSpacer, NavigationLogoImg} from '../../assets/StyledComponents/Navigation';

// Import custom configurations functions
import { LANGUAGES } from '../../config';

//#endregion

/**
 * Navbar component
 *  
 * This component uses a grid container to returns the top navbar with the site logo and the respective 3 navigation logo links
 * 
 * @name Navbar
 * @function
 * @returns {StyledComponent} A styled component which uses grid container to render the site logo and navigation bar
 */
function Navbar (){
    // Get the translation and language switching components
    const { t, i18n } = useTranslation("");

    // Create a custom theme for the material ui inputs
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#fff',
          },
          secondary: {
            main: '#fff',
          },
        },
    });

    // This function gets triggered when the user changes the language from the drop down. The function then updates language, locale and region store items. The locale and region
    // can only be changed after the language has been switched as their values are set within the translations files.
    function UpdateLanguage(event) {
        i18n.changeLanguage(event.target.value);
    }

    return (
        <NavbarPosition>
            <GridContainer 
                direction="row"
                justify="space-between"          
                alignItems="flex-end"
            >
                {/* Site Logo */}
                <GridItem xs={12} sm={4} lg={7}>
                    <NavigationSpacer>
                        <Link to={"/"}>
                            <LogoImg src={SiteLogo}/>
                        </Link>
                    </NavigationSpacer>
                </GridItem>
                <GridItem xs={12} sm={8} lg={5}>
                    <GridContainer 
                        direction="row"
                        justify="flex-end"        
                    >
                        <GridItem xs={6} sm={3}>
                            <NavigationSpacer>
                                <Link to={"/Cargo4You"}>
                                    <NavigationLogoImg src={Cargo4YouLogo}/>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={6} sm={3}>
                            <NavigationSpacer>
                                <Link to={"/ShipFaster"}>
                                    <NavigationLogoImg src={ShipFasterLogo}/>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={6} sm={3}>
                            <NavigationSpacer>
                                <Link to={"/MaltaShip"}>
                                    <NavigationLogoImg src={MaltaShipLogo}/>
                                </Link>
                            </NavigationSpacer>
                        </GridItem>
                        <GridItem xs={6} sm={3}>
                            <ThemeProvider theme={theme}>
                                <StyledFormControl>
                                    {/* The drop down list section */}
                                    <StyledSelect
                                        MenuProps={{}}
                                        value={i18n.language}
                                        inputProps={{
                                            name: "language",
                                            id: "language",
                                            onChange: event => UpdateLanguage(event)
                                        }}
                                        >
                                        <MenuItem
                                            disabled
                                        >
                                            <span className="menu_item">
                                                {t("language:title")}
                                            </span>
                                        </MenuItem>
                                        {LANGUAGES.map((props, key) => {
                                            return(
                                            <MenuItem
                                                key={key}
                                                value={props.id}
                                            >
                                                <span>{props.name}</span>
                                            </MenuItem>
                                            );
                                        })}
                                    </StyledSelect>
                                </StyledFormControl>
                            </ThemeProvider>
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
        </NavbarPosition>
    );
}

export default Navbar;