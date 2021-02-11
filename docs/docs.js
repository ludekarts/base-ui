import React, { useState } from "react";
import styled from "styled-components";

// ---- Base-UI ----------------

import { GlobalStyles, Text } from "../src";
import { Container, Rail, Stack, Grid } from "../src/layout";
import { Button, Underline, Ghost, Checkbox, Switch } from "../src/buttons";


const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  color: #222222;

  --pink: #ff2266;
`;

const Box = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #ddd;
  justify-content: center;

  &.nostretch {
    width: auto;
  }
`;

const Docs = () => {
  const [state, setState] = useState();
  return (
    <Wrapper>
      <GlobalStyles>
        <Container>
          <Stack>
            <Text as="h1" color="deepskyblue">Hello Base-UI Docs</Text>

            <Text as="h2">Buttons</Text>
            <Stack>
              <h4>Basic</h4>
              <Rail className="--stack-center">
                <Button size="sm" color="rebeccapurple">Small</Button>
                <Button size="md" bg="var(--pink)">Normal</Button>
                <Button size="md" disabled>Disabled</Button>
                <Button size="lg" color="white" bg="#3355ee">Large</Button>
                <Button size="lg" color="white" bg="#3355ee" inverse>Inverse</Button>
              </Rail>
              <h4>Underline</h4>
              <Rail className="--stack-center">
                <Underline size="sm" color="rebeccapurple">Small</Underline>
                <Underline size="md" bg="var(--pink)">Normal</Underline>
                <Underline size="md" disabled>Disabled</Underline>
                <Underline size="lg" color="white" bg="#3355ee">Large</Underline>
                <Underline size="lg" color="white" bg="#3355ee" inverse>Inverse</Underline>
              </Rail>
              <h4>Ghost</h4>
              <Rail className="--stack-center" breakpoint="570px">
                <Ghost size="sm" color="rebeccapurple">Small</Ghost>
                <Ghost size="md" color="var(--pink)">Normal</Ghost>
                <Ghost size="md" disabled>Disabled</Ghost>
                <Ghost size="lg" color="#3355ee" bg="#FFFFFF">Large</Ghost>
                <Ghost size="lg" color="#3355ee" bg="#FFFFFF" inverse>Inverse</Ghost>
              </Rail>
              <Rail className="--stack-center">
                <Ghost size="sm" rounded color="rebeccapurple">Small</Ghost>
                <Ghost size="md" rounded color="var(--pink)">Normal</Ghost>
                <Ghost size="md" rounded disabled>Disabled</Ghost>
                <Ghost size="lg" rounded color="#3355ee" bg="#FFFFFF">Large</Ghost>
                <Ghost size="lg" rounded color="#3355ee" bg="#FFFFFF" inverse>Inverse</Ghost>
              </Rail>
              <h4>Checkbox</h4>
              <Rail className="--stack-center">
                <Checkbox id="c-1" />
                <Checkbox id="c-2" color="var(--pink)" defaultChecked />
                <Checkbox id="c-3" color="#3355ee" />
              </Rail>
              <h4>Radio</h4>
              <Rail className="--stack-center">
                <Checkbox id="c-4" mode="radio" />
                <Checkbox id="c-5" mode="radio" color="var(--pink)" />
                <Checkbox id="c-6" mode="radio" color="#3355ee" />
              </Rail>
              <h4>Switch</h4>
              <Rail className="--stack-center">
                <Switch />
                <Switch color="var(--pink)" />
                <Switch color="#3355ee" />
              </Rail>
            </Stack>


            <Text as="h2">Rail</Text>
            <Rail breakpoint="400px" className="--rail-end">
              <Box className="nostretch --space-4x-i">1</Box>
              <Box className="nostretch --space-4x-i">2</Box>
              <Box className="nostretch --space-4x-i">3</Box>
            </Rail>

            <Text as="h2">Stack</Text>
            <Stack breakpoint="700px" className="--rail-end">
              <Box className="--space-4x-i">4</Box>
              <Box className="--space-4x-i">5</Box>
              <Box className="--space-4x-i">6</Box>
            </Stack>

            <Text as="h2">Grid</Text>
            <Grid>
              <Box>7</Box>
              <Box>8</Box>
              <Box>9</Box>
              <Box>10</Box>
            </Grid>
          </Stack>
        </Container>
      </GlobalStyles>
    </Wrapper>
  );
}

Docs.displayName = "Docs";
export default Docs;