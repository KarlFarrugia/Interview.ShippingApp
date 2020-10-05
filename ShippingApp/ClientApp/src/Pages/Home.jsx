import * as React from 'react';
import { Link } from "react-router-dom";

// Import multilanguage component
import { useTranslation } from "react-i18next";

// Import grid components
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";

// Import custom configurations functions
import { COURIERS } from '../config';

// Import styled components and the styled component from react as it is needed for the backdrop
import {Layout, Heading, ShippingLink, ShippingLinkText, BackgroundElement} from "../assets/StyledComponents/Home";


function Home () {
  // Get the translation and language switching components
  const { t, i18n } = useTranslation("");
  
  return(
    <Layout>
      <BackgroundElement />
      <GridContainer
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <GridItem>
          <Heading>
            {t("home:courier")}
          </Heading>
          {COURIERS.map((props, key) => {
              return(
                <Link key={key} to={`${props.link}`}>
                  <ShippingLink>
                    <ShippingLinkText>
                      {props.name}
                    </ShippingLinkText>
                  </ShippingLink>
                </ Link>
              );
          })}
        </GridItem>
      </GridContainer>
    </Layout>
  );
}

export default Home;
