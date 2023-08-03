import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          <span style={{ color: "green", fontSize: "26px" }}>
            Details about the bcard Website
          </span>{""}
          <br />
          Welcome to bcard website that you can find information about cards with
          details for example: your number, email,and others.
          The navbar at the website give you option to sign up and create a new account.
          Its a simple steps to make a new account, at the left side of the navbar you have 
          signup button and there you can fill up your details.The benefits from making a user
          is the option to create and edit cards and also you have at the navbar
          option to enter to your cards,if you don't have account you just have the Home page
          like the photo on the right. 
              
        </Grid>
        <Grid item md={7} xs={12}>
          <img src="/assets/images/cardpage.png" alt="card" width="100%" />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          Business Member can add his cards to the website in 'My Cards' link,
          when clicking the odd button you will transfer to add card page. If
          you want to edit it later, just clicking the pencil icon on your card
          and you will get all the details of the product in the initial table.
        </Grid>
       
        <Grid item md={12} xs={12}>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          Admins Members can manage their users in the CRM system. If you are an
          admin  the link'CRM' will appear in the head navbar.In the page CRM you 
          can find a table of all the users in the website.You also can delete 
          the users or change their status. 
          
        
        </Grid>
        <Grid item md={7} xs={12}>
          <img src="/assets/images/crm.png" alt="card" width="120%" />
        </Grid>
        
      </Grid>

        
      
    </Container>
  );
};

export default AboutPage;
