import React, { useState } from "react";
import styled from "styled-components";

// ---- Base-UI ----------------

import { GlobalStyles, Text } from "../src";
import { Container, Rail, Stack, Grid, Space, Columns } from "../src/layout";
import { Button, Checkbox, Switch } from "../src/buttons";
import Form from "../src/form";
import { Drawer, Modal, Overlay } from "../src/panels";

const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  color: #222222;

 ${({ theme }) => theme === "one" ? `
  --akcent-one: #ff2266;
  --akcent-two: #3355ee;
 ` : theme === "two" ? `
  --akcent-one: #673ab7;
  --akcent-two: #ffc107;
  ` : `
  --akcent-one: #009688;
  --akcent-two: #8bc34a;
`}
 

  & input {
    padding: 0.8em 1em;
    border: 1px solid #ddd;
  }

  .text-right {
    text-align:right;
  }

  .bg-gray {
    background-color: #ddd;
  }

  .border-gray {
    border: 1px  solid #ccc;
  }
`;

const MiniBox = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: ${({ color }) => color || "#666"};
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

  &.reular {
    width: auto;
    height: auto;
  }
`;

const Docs = () => {
  const [form, setForm] = useState({ username: "", password: "", isAdmin: false, gender: "" });
  const [showOverlay, toggleOverlay] = useState(false);
  const [showDrawer, toggleDrawer] = useState(false);
  const [showModal, toggleModal] = useState(false);
  const [theme, changeTheme] = useState("one");
  return (
    <GlobalStyles>
      <Wrapper theme={theme}>
        <Container>
          <Stack>
            <Text as="h1" color="deepskyblue">🔮 Hello! Base-UI Docs </Text>

            <Space className="border-gray" space="0.3em 1em" inset>
              <Rail className="--v-center">
                <Text>Theme as U like 😉</Text>
                <Button onClick={() => changeTheme("one")} color="transparent">
                  <MiniBox color="#666666" />
                  <MiniBox color="#ff2266" />
                  <MiniBox color="#3355ee" />
                </Button>
                <Button onClick={() => changeTheme("two")} color="transparent">
                  <MiniBox color="#666666" />
                  <MiniBox color="#673ab7" />
                  <MiniBox color="#ffc107" />
                </Button>
                <Button onClick={() => changeTheme("three")} color="transparent">
                  <MiniBox color="#666666" />
                  <MiniBox color="#009688" />
                  <MiniBox color="#8bc34a" />
                </Button>
              </Rail>
            </Space>

            <Text as="h2">Buttons</Text>
            <Space inset>
              <Stack>
                <h4>Button: Small</h4>
                <Rail className="--stack-center">
                  <Button size="sm" >Small Color</Button>
                  <Button size="sm" text="white" color="var(--akcent-one)">Small Bg</Button>
                  <Button as="a" href="#" size="sm" text="white" color="var(--akcent-two)">Small Link</Button>
                </Rail>

                <h4>Button: Normal</h4>
                <Rail className="--stack-center">
                  <Button>Normal Color</Button>
                  <Button text="white" color="var(--akcent-one)">Normal Bg</Button>
                  <Button as="a" href="#" text="white" color="var(--akcent-two)">Normal Link</Button>
                </Rail>

                <h4>Button: Large</h4>
                <Rail className="--stack-center">
                  <Button size="lg" >Large Color</Button>
                  <Button size="lg" text="white" color="var(--akcent-one)">Large Bg</Button>
                  <Button as="a" href="#" size="lg" text="white" color="var(--akcent-two)">Large Link</Button>
                </Rail>
              </Stack>
            </Space>

            <Text as="h2">Checkbox</Text>
            <input type="checkbox" />
            <Space inset>
              <Stack>
                <h4>Uncontrolled</h4>
                <Rail className="--stack-center">
                  <Checkbox name="c1" />
                  <Checkbox name="c2" color="var(--akcent-one)" />
                  <Checkbox name="c3" color="var(--akcent-two)" defaultChecked />
                </Rail>

                <h4>Radio Mode <span>// require providing same NAME and uique IDs for the Chcekboces</span></h4>
                <Rail className="--stack-center">
                  <Checkbox type="radio" name="r1" id="c4" defaultChecked />
                  <Checkbox type="radio" name="r1" id="c5" color="var(--akcent-one)" />
                  <Checkbox type="radio" name="r1" id="c6" color="var(--akcent-two)" />
                </Rail>

                <h4>Rounded</h4>
                <Rail className="--stack-center">
                  <Checkbox type="radio" rounded name="r2" id="c7" />
                  <Checkbox type="radio" rounded name="r2" id="c8" color="var(--akcent-one)" defaultChecked />
                  <Checkbox type="radio" rounded name="r2" id="c9" color="var(--akcent-two)" />
                </Rail>

              </Stack>
            </Space>

            <Text as="h2">Switch</Text>
            <Space inset>
              <Stack>
                <h4>Uncontrolled</h4>
                <Rail className="--stack-center">
                  <Switch name="s1" size="sm" />
                  <Switch name="s2" size="md" color="var(--akcent-one)" />
                  <Switch name="s3" size="lg" color="var(--akcent-two)" offColor="#ccc" />
                </Rail>

                <h4>Squared</h4>
                <Rail className="--stack-center">
                  <Switch name="s4" size="sm" squared />
                  <Switch name="s5" size="md" squared color="var(--akcent-one)" offColor="#ccc" />
                  <Switch name="s6" size="lg" squared color="var(--akcent-two)" />
                </Rail>
              </Stack>
            </Space>

            <Text as="h2">Panels</Text>
            <Rail>
              <Button onClick={() => toggleOverlay(!showOverlay)}>Overlay</Button>
              <Button color="var(--akcent-one)" text="white" onClick={() => toggleModal(!showModal)}>Modal</Button>
              <Button color="var(--akcent-two)" text="white" onClick={() => toggleDrawer(!showDrawer)}>Drawer</Button>
            </Rail>

            <Text as="h2">Form</Text>
            <Space inset >
              <Columns minSize="420px">
                <Stack>
                  <Form onSubmit={data => setForm({ ...data, isAdmin: data.isAdmin.checked })} includeCheckStatus>
                    <Stack>
                      <Rail expandContent>
                        <input name="username" type="text" placeholder="Username" required className="base-ui-focus" />
                        <input name="password" type="password" placeholder="Password" required className="base-ui-focus" />
                      </Rail>
                      <Rail className="--stack-center --rail-spread">
                        <Rail>
                          <Switch name="isAdmin" size="sm" /> <label htmlFor="isAdmin">Is Administrator</label>
                        </Rail>
                        <Rail>
                          <Rail className="--stack-center">
                            <Checkbox type="radio" rounded name="gender" value="male" id="g1" color="var(--akcent-two)" />
                            <label htmlFor="g1">Male</label>
                          </Rail>
                          <Rail className="--stack-center">
                            <Checkbox type="radio" rounded name="gender" value="female" id="g2" color="var(--akcent-one)" />
                            <label htmlFor="g2">Female</label>
                          </Rail>
                        </Rail>
                      </Rail>
                      <Rail className="--rail-end">
                        <Button type="submit">Submit</Button>
                      </Rail>
                    </Stack>
                  </Form>
                </Stack>

                <Space breakpoint="920px" minmax="max" spaceBefore="0 1em" spaceAfter="1em 0 0" inset stretch>
                  <Rail className="--stack-spread" stretch>
                    <Stack gap="0.5em">
                      <Text size="0.8em">Username</Text>
                      <Text size="0.8em">Password</Text>
                      <Text size="0.8em">Is Administrator</Text>
                      <Text size="0.8em">Gender</Text>
                    </Stack>
                    <Stack gap="0.5em">
                      <Text size="0.8em">{form.username}</Text>
                      <Text size="0.8em">{form.password}</Text>
                      <Text size="0.8em">{form.isAdmin ? "🐱‍👤" : "🐱‍💻"}</Text>
                      <Text size="0.8em">{form.gender === "male" ? "👦" : "👩"}</Text>
                    </Stack>
                  </Rail>
                </Space>

              </Columns>
            </Space>

            <Text as="h2">Rail</Text>
            <Rail breakpoint="400px" className="--rail-spread">
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

            <Text as="h2">Columns</Text>
            <Columns minSize="340px">
              <Space breakpoint="760px" minmax="max" spaceBefore="0 0.5em 0 0" spaceAfter="0">
                <Box>11</Box>
              </Space>
              <Space breakpoint="760px" minmax="max" spaceBefore="0 0 0 0.5em" spaceAfter="1em 0 0">
                <Box>12</Box>
              </Space>
            </Columns>

            <Space space="0 0 3em" />
          </Stack>
        </Container>

        <Overlay open={showOverlay} onClick={() => toggleOverlay(false)} />

        <Drawer open={showDrawer} onClose={() => toggleDrawer(false)}>
          <h3>Hello drawer</h3>
          <p>This is a sample drawer content...</p>
        </Drawer>

        <Modal open={showModal} onClose={() => toggleModal(false)}>
          <h3>Hello modal</h3>
          <p>This is a sample modal content...</p>
        </Modal>
      </Wrapper>
    </GlobalStyles>
  );
}

Docs.displayName = "Docs";
export default Docs;
