import React, { useState } from "react";
import styled from "styled-components";

// ---- Base-UI ----------------

import { GlobalStyles, Text } from "../src";
import { Container, Rail, Stack, Grid, Space, Columns } from "../src/layout";
import { Button, Checkbox, Switch, Ghost, Underline, Highlight } from "../src/buttons";
import Form from "../src/form";
import { Drawer, Modal, Overlay } from "../src/panels";
import { Dropdown, DropdownToggle } from "../src/dropdown";
import Collapse from "../src/collapse";

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
 
  & pre {
    margin: 0;
  }

  & input, & pre {
    width: 100%;
    padding: 0.8em 1em;
    border: 1px solid #ddd;
  }

  .flex {
    display: flex
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

const Menu = styled.div`
  position: relative;
`;

const DropList = styled(Dropdown)`
  z-index: 20;
  padding: 1em;
  top: 120%;
  width: 11rem;
  position: absolute;
  border-radius: 0.2em;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: var(--bui-box-shadow);
`;

const Docs = () => {
  const [form, setForm] = useState({});
  const [showCollapse, toggleCollapse] = useState(false);
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

            <Text as="h2">Dropdown</Text>
            <Space inset space="0 1em">
              <Menu>
                <DropdownToggle as={Button} target="colors">
                  <Text>Theme as U like 😉</Text>
                </DropdownToggle>

                <DropList name="colors" autoHide>
                  <Stack>
                    <Button onClick={() => changeTheme("one")} color="transparent">
                      <Rail stretch className="--rail-spread --v-center">
                        <span>One</span>
                        <Rail gap="0">
                          <MiniBox color="#666666" />
                          <MiniBox color="#ff2266" />
                          <MiniBox color="#3355ee" />
                        </Rail>
                      </Rail>
                    </Button>
                    <Button onClick={() => changeTheme("two")} color="transparent">
                      <Rail stretch className="--rail-spread --v-center">
                        <span>Two</span>
                        <Rail gap="0">
                          <MiniBox color="#666666" />
                          <MiniBox color="#673ab7" />
                          <MiniBox color="#ffc107" />
                        </Rail>
                      </Rail>
                    </Button>
                    <Button onClick={() => changeTheme("three")} color="transparent">
                      <Rail stretch className="--rail-spread --v-center">
                        <span>Three</span>
                        <Rail gap="0">
                          <MiniBox color="#666666" />
                          <MiniBox color="#009688" />
                          <MiniBox color="#8bc34a" />
                        </Rail>
                      </Rail>
                    </Button>
                  </Stack>
                </DropList>
              </Menu>
            </Space>

            <Text as="h2">Buttons</Text>
            <Space space="1em" inset>
              <Stack>
                <h4>Button</h4>
                <Rail className="--stack-center">
                  <Button>Default</Button>
                  <Button color="var(--akcent-one)" text="white">Color</Button>
                  <Button color="var(--akcent-one)" text="white" inverse>Inverse</Button>
                  <Button disabled>Disabled</Button>
                </Rail>

                <h4>Ghost</h4>
                <Rail className="--stack-center">
                  <Ghost>Default</Ghost>
                  <Ghost color="var(--akcent-two)" text="white">Color</Ghost>
                  <Ghost color="var(--akcent-two)" text="white" rounded>Rounded</Ghost>
                  <Ghost color="var(--akcent-two)" text="white" inverse>Inverse</Ghost>
                  <Ghost color="var(--akcent-two)" text="white" uppercase>Uppercase</Ghost>
                  <Ghost disabled>Disabled</Ghost>
                </Rail>

                <h4>Underline</h4>
                <Rail className="--stack-center">
                  <Underline>Default</Underline>
                  <Underline color="var(--akcent-one)" text="white">Color</Underline>
                  <Underline color="var(--akcent-one)" text="white" inverse>Inverse</Underline>
                  <Underline color="var(--akcent-one)" text="white" active>Active</Underline>
                  <Underline disabled>Disabled</Underline>
                </Rail>


                <h4>Highlight</h4>
                <Rail className="--stack-center">
                  <Highlight>⛌</Highlight>
                  <Highlight color="var(--akcent-two)" outline activeText="white">⛌</Highlight>
                  <Highlight color="var(--akcent-two)" square>⛌</Highlight>
                  <Highlight color="var(--akcent-two)" active activeText="white">⛌</Highlight>
                  <Highlight size="sm" color="var(--akcent-two)">⛌</Highlight>
                  <Highlight size="md" color="var(--akcent-two)">⛌</Highlight>
                  <Highlight size="lg" color="var(--akcent-two)">⛌</Highlight>
                </Rail>


                {/* <Button text="white" color="var(--akcent-one)">Regular Bg</Button>
                  <Button as="a" href="#" size="lg" text="white" color="var(--akcent-two)">Large Link</Button>

                <h4>Ghost</h4>
                <Rail className="--stack-center">
                  <Ghost>Default</Ghost>
                  <Ghost inverse color="var(--akcent-one)">Inverse</Ghost>
                  <Ghost rounded color="var(--akcent-two)">Rounded</Ghost>
                </Rail>

                <h4>Underline</h4>
                <Rail className="--stack-center">
                  <Underline size="sm">Small Default</Underline>
                  <Underline size="md" inverse color="var(--akcent-one)">Regular Inverse</Underline>
                  <Underline size="lg" rounded color="var(--akcent-two)">Large Rounded</Underline>
                  <Underline size="lg" rounded color="var(--akcent-two)" className="active">Large Rounded</Underline>
                </Rail>

                <h4>Highlight</h4>
               */}
              </Stack>
            </Space>

            <Text as="h2">Checkbox</Text>
            <Space space="1em" inset>
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
            <Space space="1em" inset>
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
            <Space space="1em" inset>
              <Rail>
                <Button onClick={() => toggleOverlay(!showOverlay)}>Overlay</Button>
                <Button color="var(--akcent-one)" text="white" onClick={() => toggleModal(!showModal)}>Modal</Button>
                <Button color="var(--akcent-two)" text="white" onClick={() => toggleDrawer(!showDrawer)}>Drawer</Button>
              </Rail>
            </Space>

            <Text as="h2">Collapse</Text>
            <Space space="1em" inset>
              <Stack gap="0">
                <div>
                  <Button onClick={() => toggleCollapse(!showCollapse)} text="white" color="var(--akcent-two)">Toggle Colapse</Button>
                </div>
                <Collapse open={showCollapse} minHeight={36}>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, cum. Aliquid nulla distinctio fuga totam eum culpa molestias veritatis mollitia exercitationem, recusandae voluptates maxime nesciunt esse iste. Nihil, tempora quia.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, cum. Aliquid nulla distinctio fuga totam eum culpa molestias veritatis mollitia exercitationem, recusandae voluptates maxime nesciunt esse iste. Nihil, tempora quia.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, cum. Aliquid nulla distinctio fuga totam eum culpa molestias veritatis mollitia exercitationem, recusandae voluptates maxime nesciunt esse iste. Nihil, tempora quia.</p>
                </Collapse>
              </Stack>
            </Space>

            <Text as="h2">Form</Text>
            <Space space="1em" inset>
              <Columns minSize="420px">
                <Stack>
                  <Form onSubmit={data => setForm(data)} includeCheckStatus>
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
                  <pre>
                    {
                      JSON.stringify(form, null, 2)
                    }
                  </pre>
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
