import React, { Fragment, useState } from "react";
import { NavLink, Flex, Grid, Heading } from 'theme-ui'
import { Container } from 'theme-ui'
import { Radio, Label } from 'theme-ui'
import { KeyboardDatePicker } from "@material-ui/pickers";
import Form from "../components/form";

// markup
const IndexPage = () => {

  return (
    <main>
      <Flex as="nav">
        <NavLink href="#!" p={2}>
          Vols
        </NavLink>
        <NavLink href="#!" p={2}>
          Hôtels
        </NavLink>
        <NavLink href="#!" p={2}>
          Location de voiture
        </NavLink>
      </Flex>

      <Container p={4} bg="muted">
        <Heading>Votre voyage commence maintenant</Heading>

        <Grid gap={2} columns={[3, '1fr']}>
          <Label>
            <Radio
              value='true'
              defaultChecked={true}
            />
            Aller-retour
          </Label>
          <Label>
            <Radio
              value='false'
            />
            Aller simple
          </Label>
          <Label>
            <Radio
              value='false'
            />
            Multi-destinations
          </Label>
        </Grid>

        <Form />

      </Container>
    </main>
  )
}

export default IndexPage
