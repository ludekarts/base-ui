import { render } from "react-dom";
import React, { useState } from "react";

// ---- Docs UI ----------------

import { Wrapper, MiniBox, Badge, Box, Menu, DropList, TextIcon, SwitchIcon } from "./styled";
import imageSrc from "./assets/image.png";
import avatarSrc from "./assets/avatar.png";

// ---- Base-UI ----------------

import { Button, Checkbox, Switch, Ghost, Underline, Highlight } from "../src/buttons";
import { Container, Rail, Stack, Grid, Space, Columns, Sidebar } from "../src/layout";
import { GlobalStyles, Text, Collapse, Form } from "../src/basic";
import { Drawer, Modal, Overlay } from "../src/panels";
import { Image, Avatar } from "../src/media";


const Docs = () => {
  const [form, setForm] = useState({});
  const [showCollapse, toggleCollapse] = useState(false);
  const [showOverlay, toggleOverlay] = useState(false);
  const [showDrawer, toggleDrawer] = useState(false);
  const [showModal, toggleModal] = useState(false);
  const [theme, changeTheme] = useState("one");
  const [size, setSize] = useState("md");

  const [hasIcon, toggleIcons] = useState(false);
  const [accordionOpenIndex, selectAccordionIndex] = useState(0);

  return (
    <GlobalStyles>
      <Wrapper theme={theme}>
        <Container>
          <Stack>
            <Text as="h1" color="deepskyblue">🔮 Hello! Base-UI Docs </Text>
            <Text as="h2">Dropdown</Text>
            <Menu>
              <Button data-bui-dropdown-target="colors">
                <Text>Theme as U like 😉</Text>
              </Button>

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

            <Rail>
              <Text as="h2">Buttons</Text>
              <Button size="sm" onClick={() => setSize("sm")}>SM</Button>
              <Button size="sm" onClick={() => setSize("md")}>MD</Button>
              <Button size="sm" onClick={() => setSize("lg")}>LG</Button>
              <Button size="sm" onClick={() => toggleIcons(!hasIcon)}>Icons</Button>
            </Rail>
            <Space space="1em" inset>
              <Stack>
                <h4>Button</h4>
                <Rail className="--stack-center" wrapContent>
                  <Button size={size}>
                    <TextIcon icon={hasIcon}>Default</TextIcon>
                  </Button>
                  <Button size={size} color="var(--akcent-one)" text="white">
                    <TextIcon icon={hasIcon}>Color</TextIcon>
                  </Button>
                  <Button size={size} color="var(--akcent-one)" text="white" inverse>
                    <TextIcon icon={hasIcon}>Inverse</TextIcon>
                  </Button>
                  <Button size={size} disabled>
                    <TextIcon icon={hasIcon}>Disabled</TextIcon>
                  </Button>
                </Rail>

                <h4>Ghost</h4>
                <Rail className="--stack-center" wrapContent>
                  <Ghost size={size}>
                    <TextIcon icon={hasIcon}>Default</TextIcon>
                  </Ghost>
                  <Ghost size={size} color="var(--akcent-two)" text="white">
                    <TextIcon icon={hasIcon}>Color</TextIcon>
                  </Ghost>
                  <Ghost size={size} color="var(--akcent-two)" text="white" rounded>
                    <TextIcon icon={hasIcon}>Rounded</TextIcon>
                  </Ghost>
                  <Ghost size={size} color="var(--akcent-two)" text="white" inverse>
                    <TextIcon icon={hasIcon}>Inverse</TextIcon>
                  </Ghost>
                  <Ghost size={size} color="var(--akcent-two)" text="white" uppercase>
                    <TextIcon icon={hasIcon}>Uppercase</TextIcon>
                  </Ghost>
                  <Ghost size={size} disabled>
                    <TextIcon icon={hasIcon}>Disabled</TextIcon>
                  </Ghost>
                </Rail>

                <h4>Underline</h4>
                <Rail className="--stack-center" wrapContent>
                  <Underline size={size}>
                    <TextIcon icon={hasIcon}>Default</TextIcon>
                  </Underline>
                  <Underline size={size} color="var(--akcent-one)" text="white" >
                    <TextIcon icon={hasIcon}>Color</TextIcon>
                  </Underline>
                  <Underline size={size} color="var(--akcent-one)" text="white" inverse>
                    <TextIcon icon={hasIcon}>Inverse</TextIcon>
                  </Underline>
                  <Underline size={size} color="var(--akcent-one)" text="white" active>
                    <TextIcon icon={hasIcon}>Active</TextIcon>
                  </Underline>
                  <Underline size={size} disabled>
                    <TextIcon icon={hasIcon}>Disabled</TextIcon>
                  </Underline>
                </Rail>

                <h4>Highlight</h4>
                <Rail className="--stack-center" >
                  <Highlight size={size}>
                    <SwitchIcon icon={hasIcon}>⛌</SwitchIcon>
                  </Highlight>
                  <Highlight size={size} color="var(--akcent-two)" outline activeText="white">
                    <SwitchIcon icon={hasIcon}>⛌</SwitchIcon>
                  </Highlight>
                  <Highlight size={size} color="var(--akcent-two)" square>
                    <SwitchIcon icon={hasIcon}>⛌</SwitchIcon>
                  </Highlight>
                  <Highlight size={size} color="var(--akcent-two)" active activeText="white">
                    <SwitchIcon icon={hasIcon}>⛌</SwitchIcon>
                  </Highlight>
                </Rail>
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

            <Text as="h2">Media</Text>
            <Space space="1em" inset>
              <Stack>
                <h4>Image</h4>
                <Rail wrapContent>
                  <Stack gap="0.2em" className="--v-center">
                    <Image src={imageSrc} size="auto" alt="Base UI - basic ui components library" />
                    <div>Full size image</div>
                  </Stack>
                  <Box className="fixbox no-bg no-center">
                    <Stack gap="0.7em" className="--v-center">
                      <Image src={imageSrc} alt="Base UI - basic ui components library" />
                      <div>Fit image</div>
                    </Stack>
                  </Box>
                  <Box className="fixbox no-bg no-center">
                    <Stack gap="0.7em" className="--v-center">
                      <Image src="#" alt="Broken image" />
                      <div>Broken image</div>
                    </Stack>
                  </Box>
                </Rail>

                <h4>Avatar</h4>
                <Rail>
                  <Avatar src={avatarSrc} alt="Avatar" />
                  <Avatar src="#" alt="Broken avatar" />
                  <Avatar src={avatarSrc} alt="Avatar rounded" rounded="0.7em" />
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
            {/* 
                */}


            <Text as="h2">Form</Text>
            {/* Notice "--flex-column" class to enforce <Columns/> to grow full width without applying width:100% which brakes layout */}
            <Space className="--flex-column" space="1em" stretch inset>
              <Columns minSize="400px">
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

                <pre>
                  {
                    JSON.stringify(form, null, 2)
                  }
                </pre>
              </Columns>
            </Space>

            <Text as="h2">Rail</Text>
            <Rail breakpoint="400px" className="--rail-spread">
              <Box className="nostretch --space-4x-i">1</Box>
              <Box className="nostretch --space-4x-i">2</Box>
              <Box className="nostretch --space-4x-i">3</Box>
            </Rail>

            <Text as="h2">Rail:wrapContent</Text>
            <Box className="fixbox --space-i">
              <Rail wrapContent>
                <Badge>1</Badge>
                <Badge>2</Badge>
                <Badge>3</Badge>
                <Badge>4</Badge>
                <Badge>5</Badge>
                <Badge>6</Badge>
              </Rail>
            </Box>

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
              <Box>11</Box>
              <Box>12</Box>
              <Box>13</Box>
              <Box>14</Box>
            </Columns>

            <Text as="h2">Sidebar</Text>
            <Sidebar>
              <Box>Sidebar</Box>
              <Box>Content</Box>
            </Sidebar>

            <Space space="0 0 3em" />
          </Stack>

          <hr />

          <Text as="h2">Accordion</Text>
          <Text font="monospace" color="#333">Composition of Button, Rail, Collapse and useState</Text>
          <Space />
          <Stack gap="0" stretch expandContent>

            <Button className="sharpCorners" onClick={() => selectAccordionIndex(0)}>
              <Rail stretch>
                Accordion One
              </Rail>
            </Button>
            <Collapse open={accordionOpenIndex === 0}>
              <Space space="1em" inset>
                Accordion One Content...
              </Space>
            </Collapse>

            <Button className="sharpCorners" onClick={() => selectAccordionIndex(1)}>
              <Rail stretch>
                Accordion Two
              </Rail>
            </Button>
            <Collapse open={accordionOpenIndex === 1}>
              <Space space="1em" inset>
                Accordion Two Content...
              </Space>
            </Collapse>

            <Button className="sharpCorners" onClick={() => selectAccordionIndex(2)}>
              <Rail stretch>
                Accordion Three
              </Rail>
            </Button>
            <Collapse open={accordionOpenIndex === 2}>
              <Space space="1em" inset>
                Accordion Three Content...
              </Space>
            </Collapse>
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


render(<Docs />, document.getElementById("app"));