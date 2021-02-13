import React, { useState } from "react";
import styled from "styled-components";

// ---- Base-UI ----------------

import { GlobalStyles, Text } from "../src";
import { Container, Rail, Stack, Grid, Space } from "../src/layout";
import { Button, Checkbox, Switch } from "../src/buttons";


const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  color: #222222;

  --pink: #ff2266;
  --blue: #3355ee;
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
    <GlobalStyles>
      <Wrapper>
        <Container>
          <Stack>
            <Text as="h1" color="deepskyblue">🔮 Hello! Base-UI Docs </Text>

            <Text as="h2">Buttons</Text>
            <Space inset>
              <Stack>
                <h4>Button: Small</h4>
                <Rail className="--stack-center">
                  <Button size="sm" >Small Color</Button>
                  <Button size="sm" color="white" bg="var(--pink)">Small Bg</Button>
                  <Button as="a" href="#" size="sm" color="white" bg="var(--blue)">Small Link</Button>
                </Rail>

                <h4>Button: Normal</h4>
                <Rail className="--stack-center">
                  <Button>Normal Color</Button>
                  <Button color="white" bg="var(--pink)">Normal Bg</Button>
                  <Button as="a" href="#" color="white" bg="var(--blue)">Normal Link</Button>
                </Rail>

                <h4>Button: Large</h4>
                <Rail className="--stack-center">
                  <Button size="lg" >Large Color</Button>
                  <Button size="lg" color="white" bg="var(--pink)">Large Bg</Button>
                  <Button as="a" href="#" size="lg" color="white" bg="var(--blue)">Large Link</Button>
                </Rail>
              </Stack>
            </Space>

            <Text as="h2">Checkbox</Text>
            <Space inset>
              <Stack>
                <h4>Uncontrolled</h4>
                <Rail className="--stack-center">
                  <Checkbox name="c1" />
                  <Checkbox name="c2" color="var(--pink)" />
                  <Checkbox name="c3" color="var(--blue)" defaultChecked />
                </Rail>

                <h4>Rounded</h4>
                <Rail className="--stack-center">
                  <Checkbox type="radio" name="r1" id="c4" defaultChecked />
                  <Checkbox type="radio" name="r1" id="c5" color="var(--pink)" />
                  <Checkbox type="radio" name="r1" id="c6" color="var(--blue)" />
                </Rail>

                <h4>Radio Mode <span>// require providing same NAME and uique IDs for the Chcekboces</span></h4>
                <Rail className="--stack-center">
                  <Checkbox type="radio" rounded name="r2" id="c7" />
                  <Checkbox type="radio" rounded name="r2" id="c8" color="var(--pink)" defaultChecked />
                  <Checkbox type="radio" rounded name="r2" id="c9" color="var(--blue)" />
                </Rail>

              </Stack>
            </Space>

            <Text as="h2">Switch</Text>
            <Space inset>
              <Stack>
                <h4>Uncontrolled</h4>
                <Rail className="--stack-center">
                  <Switch name="s1" size="sm" />
                  <Switch name="s2" size="md" color="var(--pink)" />
                  <Switch name="s3" size="lg" color="var(--blue)" offColor="#ccc" />
                </Rail>

                <h4>Squared</h4>
                <Rail className="--stack-center">
                  <Switch name="s4" size="sm" squared />
                  <Switch name="s5" size="md" squared color="var(--pink)" offColor="#ccc" />
                  <Switch name="s6" size="lg" squared color="var(--blue)" />
                </Rail>

              </Stack>
            </Space>


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
      </Wrapper>
    </GlobalStyles>
  );
}

Docs.displayName = "Docs";
export default Docs;

/*

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
*/