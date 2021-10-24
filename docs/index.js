import { render } from "react-dom";
import React, { useState, useRef } from "react";

// ---- Docs UI ----------------

import { Wrapper, MiniBox, Box, Menu, DropList, TextIcon, SwitchIcon, MobileMenu, SomeContainer, Nav } from "./styled";
import imageSrc from "./assets/image.png";
import avatarSrc from "./assets/avatar.png";

// ---- Base-UI ----------------

import { Button, Checkbox, Switch, Ghost, Underline, Highlight, Close } from "../src/buttons";
import { Container, Rail, Stack, Grid, Space, Columns, Sidebar, Cover } from "../src/layout";
import { GlobalStyles, Text, Collapse, Form, Badge } from "../src/basic";
import { Drawer, Modal, Overlay } from "../src/panels";
import { Image, Avatar, AspectRatio } from "../src/media";

const componentsList = {
  "Button": Button,
  "Ghost": Ghost,
  "Underline": Underline,
  "Highlight": Highlight,
};

const classesList = [
  "--space",
  "--space-2x",
  "--space-3x",
  "--space-4x",

  "--space-i",
  "--space-2x-i",
  "--space-3x-i",
  "--space-4x-i",

  "--stretch",
  "--epand-content",
]

function Playground(props) {
  const { component, ...rest } = props;
  const Render = component;
  component && console.log(Object.keys(Render.propTypes));
  return component ?
    <div>
      <Render {...rest} />
    </div> :
    <div>Select component</div>;
}

const Interactive = () => {
  const [showOptions, toggleOptions] = useState(false);
  const [currentComponent, setCurrentComponent] = useState();
  const [classes, setClasses] = useState("");

  const selectComponent = event => {
    if (event.target.matches("button")) {
      const name = event.target.textContent;
      setCurrentComponent(name);
    }
  };

  const selectClasses = event => {
    if (event.target.matches("button")) {
      const klass = event.target.textContent;
      setClasses(`${classes} ${klass}`);
    }
  }

  return (
    <GlobalStyles>
      <Wrapper>
        <Container>
          <Stack>
            <Text as="h1" color="deepskyblue">🔮 Hello! Base-UI Docs</Text>
            <Rail>
              <Button size="sm" onClick={() => toggleOptions(!showOptions)}>Options</Button>
            </Rail>

            <Cover>
              <Playground
                className={classes}
                component={componentsList[currentComponent]}>
                {currentComponent}
              </Playground>
            </Cover>

          </Stack>
        </Container>

        <Drawer width="400px" open={showOptions} onClose={() => toggleOptions(false)} noOverlay>
          <Space inset space="2em 0 1em" className="--expand-content">
            <Columns minSize="100px">
              <Stack gap="0.3em" onClick={selectComponent}>
                <h3>Components</h3>
                {
                  Object.keys(componentsList).map(name =>
                    <button key={name} className="--text-left">{name}</button>
                  )
                }
              </Stack>
              <Stack gap="0.3em" onClick={selectClasses}>
                <h3>Classes</h3>
                {
                  classesList.map(klass =>
                    <button key={klass} className="--text-right">{klass}</button>
                  )
                }
              </Stack>
            </Columns>
          </Space>
        </Drawer>
      </Wrapper>
    </GlobalStyles>
  )
};

function getPropsDescription(params) {

}


const CoverTest = () => {
  return (
    <GlobalStyles fullCover off>
      <Wrapper>
        <Container spacing="1em 1.5em">
          <Text as="h1" color="var(--akcent-one)">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <p>Cras ornare arcu eu suscipit scelerisque. Phasellus et tempor velit, id sodales augue. Ut ut tortor venenatis, congue leo non, venenatis augue. Quisque at eros eu ex sagittis finibus et et dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum eget est justo. Praesent hendrerit, orci ac egestas ullamcorper, ex lacus posuere urna, in eleifend libero ligula eu ligula. Nam et augue aliquet, mollis eros posuere, porttitor libero. In hac habitasse platea dictumst. Phasellus orci mi, suscipit sed vehicula ut, venenatis non orci. Nulla mollis felis et ante eleifend iaculis. Vestibulum laoreet tortor quis ante blandit, et iaculis mauris tempor.</p>
          <p>Proin aliquet ultricies pulvinar. Quisque ut erat imperdiet, venenatis velit venenatis, lacinia odio. Vivamus maximus sapien urna, nec rutrum massa viverra at. Suspendisse nec urna arcu. Quisque felis sapien, mattis a commodo id, posuere eget risus. Praesent consequat velit non rhoncus suscipit. Ut elementum nibh ac ipsum fermentum sagittis. Sed faucibus hendrerit lectus, in aliquet nisl pellentesque in. Sed vehicula arcu non commodo pellentesque. Phasellus nec ipsum accumsan, convallis eros sed, ullamcorper magna. Fusce sed mollis ipsum. Nullam id risus eget tortor vulputate eleifend. Vestibulum in dignissim nulla. Maecenas sagittis nisl nisi, vitae tempor arcu semper non. Maecenas lobortis eget risus sed imperdiet.</p>
          <p>Nulla sed nibh non metus consequat ullamcorper et non lorem. Pellentesque vitae felis eros. Curabitur sed eleifend ante. Ut vel vulputate purus. Quisque ac commodo mauris, ut placerat lectus. Fusce sagittis augue lacus, et feugiat justo porttitor vel. Morbi varius maximus varius. Donec pharetra augue ut risus fringilla, ut interdum purus molestie. Curabitur ut urna et mi scelerisque aliquet vitae nec tellus. Cras interdum quam vitae metus pellentesque, non dapibus sem cursus. Aliquam tempor semper maximus.</p>
          <Text as="h2" color="var(--akcent-one)">Duis condimentum nibh ut turpis ornare laoreet.</Text>
          <p>Maecenas arcu massa, aliquet sed laoreet sit amet, molestie ut ex. Praesent sit amet vestibulum sem. Morbi eget ligula non dui cursus vestibulum. Aenean arcu dui, blandit vitae risus quis, euismod lacinia eros. Vestibulum semper purus vitae dui elementum, suscipit egestas tellus cursus. Sed molestie neque vitae augue varius, id tempus tellus placerat. Nulla a accumsan lorem, convallis elementum dolor. Sed dictum eros id placerat tristique. Nulla efficitur, velit id ullamcorper bibendum, metus quam scelerisque arcu, ut sodales sapien massa sed arcu. Fusce at neque libero. Mauris commodo, odio vel facilisis malesuada, justo nisl suscipit orci, sit amet hendrerit risus diam ut neque.</p>
          <p>Proin nec vulputate nisl. Donec sed lectus vel dolor interdum tincidunt. Pellentesque consequat felis nec ipsum fringilla, id lacinia justo imperdiet. Nulla id eros at dolor varius placerat quis sed lacus. Maecenas et velit non nisl mattis pharetra vitae a sapien. Vivamus in mauris suscipit, vehicula nisi et, sollicitudin augue. Curabitur lorem ipsum, bibendum in egestas id, congue vitae dui. Ut volutpat sapien massa, sed aliquet ex commodo sit amet. Aenean faucibus lacus ut risus suscipit, quis molestie urna imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur elementum vehicula leo, in molestie urna ultricies ac. Aliquam viverra, leo nec commodo laoreet, mauris nulla mattis nisl, eu rutrum lacus turpis et odio. Fusce sit amet diam nec odio porta dignissim vitae sed nisl. Curabitur orci quam, tincidunt sit amet lacus ut, sodales malesuada sem.</p>
          <p>Etiam ornare orci fermentum enim placerat volutpat. Mauris at purus massa. Vestibulum scelerisque venenatis tempor. Nulla sollicitudin neque vitae neque pretium, condimentum scelerisque elit pharetra. Sed at turpis mollis, viverra odio et, venenatis urna. Phasellus sed justo nulla. Vestibulum lacinia auctor consectetur. Maecenas malesuada volutpat aliquam. Vivamus iaculis, neque sed egestas pellentesque, metus massa facilisis lorem, sed faucibus leo ante a mauris. Donec aliquet odio quis massa vulputate, sit amet fermentum tellus lobortis. Etiam id volutpat dui. Sed at facilisis justo, sit amet maximus mi. Nunc tempor feugiat eleifend.</p>
          <p>Morbi ac diam est. Morbi sagittis nulla cursus enim vestibulum, eu congue est sagittis. Suspendisse sit amet arcu ut eros consectetur facilisis at eget elit. Cras eget dignissim mauris. Integer porta vitae turpis eu blandit. Sed pharetra ipsum quis neque finibus luctus. Nullam lacinia nulla justo, in pharetra arcu sagittis at. Nam nec justo non erat venenatis tempor ut eget ipsum.</p>
          <p>Curabitur volutpat, erat a volutpat pellentesque, justo neque molestie ipsum, ut malesuada ipsum mauris eu lacus. Vivamus facilisis dapibus diam, id suscipit augue placerat in. Nunc fermentum imperdiet tellus sed laoreet. Nullam in leo sit amet orci ornare auctor. Vivamus elementum, lacus eget imperdiet dignissim, eros ante molestie est, sit amet consectetur orci mi tristique nunc. Ut tempus arcu ut enim pharetra porttitor. Quisque rhoncus diam purus, in laoreet erat facilisis sed.</p>
          <p>Sed aliquet semper justo. Aenean et sem enim. Mauris consectetur auctor ante, nec cursus tortor tincidunt vehicula. Proin auctor turpis eu turpis rhoncus, sit amet dictum leo ornare. In id nulla sem. Aliquam lorem magna, auctor vitae euismod nec, volutpat et enim. Sed vel lorem sit amet felis luctus imperdiet vitae ut velit. Nulla mi velit, laoreet sed elit sed, elementum ultrices velit. Sed ipsum ligula, vehicula sed venenatis a, luctus et mauris. Pellentesque non augue augue. Morbi non leo lorem. Cras eros sem, molestie eu ante et, posuere rhoncus orci. Sed dignissim ligula et tellus tincidunt tristique. Vivamus tempus tincidunt urna ut fermentum.</p>
          <p>Maecenas rutrum eros diam, vitae faucibus orci finibus et. Curabitur varius venenatis tincidunt. Nam convallis condimentum pharetra. Morbi consequat pretium enim, in congue nibh. Fusce magna metus, ultrices et purus in, aliquet accumsan dolor. Curabitur lacinia congue bibendum. Quisque bibendum, risus ac euismod varius, purus odio pellentesque ante, vitae auctor magna neque non arcu. Aliquam quis posuere risus. Donec vestibulum commodo cursus. Quisque hendrerit mollis velit, eget accumsan nulla posuere et.</p>
          <p>Sed consectetur non lorem sed maximus. Etiam ut diam bibendum, ultricies elit sit amet, pharetra diam. Nunc eleifend consequat elit. Aliquam condimentum placerat eros, nec scelerisque ante commodo quis. Sed convallis scelerisque rutrum. Aenean ultrices lorem in ipsum hendrerit lacinia. Phasellus id purus et nisl mollis hendrerit in sagittis purus. Curabitur eget neque porttitor, pretium ligula sed, interdum lorem. Suspendisse egestas justo sit amet purus tempor aliquet. Praesent posuere lorem ut feugiat viverra. Mauris nec tortor at mi interdum malesuada.</p>
          <p>Suspendisse at tempor eros. Curabitur nec nisi vel erat cursus consequat vel quis neque. Nam lorem felis, viverra eget purus et, facilisis laoreet magna. Vivamus in maximus lectus, vel fermentum lectus. Donec urna elit, dictum vitae consequat eget, gravida aliquam ex. Fusce sed ultricies mauris, ut finibus ante. Aenean purus magna, sodales ut justo sit amet, sollicitudin posuere nulla. Pellentesque id blandit dui, ut tempor lacus. Quisque ullamcorper sem quis elit hendrerit condimentum.</p>
          <p>Nam eu tellus vel mauris pharetra gravida lacinia id tortor. Phasellus ac viverra sapien. Maecenas et elementum erat, sit amet blandit velit. Vivamus efficitur nec nunc vel tincidunt. Nunc sit amet ligula commodo ipsum placerat tempor mattis vitae risus. Nunc fringilla dui et lectus hendrerit porta. Pellentesque eu purus nec lorem tempor interdum eu sed tellus. Integer dignissim lectus augue, vel volutpat ante consectetur non. In hac habitasse platea dictumst. Phasellus euismod risus ut velit commodo suscipit. Nam eget mauris id leo malesuada mollis eu quis lorem. Phasellus euismod sapien nec pellentesque placerat.</p>
          <p>Sed tempor dapibus volutpat. Nullam vel orci lectus. Phasellus ac dolor sit amet risus pellentesque hendrerit in vel augue. Proin vitae ligula non turpis vestibulum faucibus. In feugiat eros erat, vitae cursus nulla malesuada non. Sed sed egestas arcu, eu viverra metus. In vitae purus semper, venenatis lorem id, malesuada elit. Donec fringilla dolor id augue auctor imperdiet. Phasellus nec sollicitudin quam. Mauris vitae ipsum fringilla, sodales turpis ac, interdum odio. Duis a ultricies nisl. Nulla vel aliquet nisi.</p>
          <p> Praesent sit amet mauris tristique, mollis mi eget, volutpat libero. Vivamus eget sapien viverra ligula finibus pretium. Nullam laoreet auctor mollis. Integer fringilla, erat et tristique ultrices, enim erat scelerisque nulla, et efficitur ante nibh in magna. Sed sed libero elit. Nam et pellentesque enim, et cursus risus. Maecenas ornare turpis eu nibh dictum dignissim. Vivamus a orci erat. Donec tempus lacus mi, vel pharetra arcu porttitor viverra. Nunc ac iaculis ex. Donec in viverra leo, quis vestibulum leo. Aenean aliquet purus in metus tincidunt, id imperdiet ligula molestie. Curabitur a elit tortor. Quisque tempus tincidunt rhoncus.</p>
        </Container>
        <MobileMenu>
          <Space space="0 0.5em" inset>
            <Rail className="--h-spread --stretch" >
              <Ghost rounded color="var(--akcent-one)">◄</Ghost>
              <Ghost rounded color="black">🞅</Ghost>
              <Ghost rounded color="var(--akcent-two)">▣</Ghost>
            </Rail>
          </Space>
        </MobileMenu>
      </Wrapper>
    </GlobalStyles>
  );
}

const Docs = () => {
  const imperativeForm = useRef();
  const [form, setForm] = useState({});
  const [imperativeValues, setIperativeValues] = useState({});
  const [badges, setBadges] = useState(Array.from(Array(12).keys()));
  const [checkToggleStat, setCheckToggleStat] = useState(false);
  const [showCollapse, toggleCollapse] = useState(false);
  const [showOverlay, toggleOverlay] = useState(false);
  const [showDrawer, toggleDrawer] = useState(false);
  const [showModal, toggleModal] = useState(false);
  const [ratio, setRatio] = useState("16:9");
  const [navItem, setNavItem] = useState(-1);
  const [theme, changeTheme] = useState("one");
  const [size, setSize] = useState("md");
  const [hasIcon, toggleIcons] = useState(false);
  const [accordionOpenIndex, selectAccordionIndex] = useState(0);

  const closeBadge = index => {
    const update = [...badges];
    update.splice(index, 1);
    setBadges(update);
  }

  const imperativeToggle = () => {
    const nextState = !checkToggleStat;
    Form.hardFormReset(imperativeForm.current, { resetValue: nextState })
    setCheckToggleStat(nextState);
  }

  const imperativeStates = () => {
    setIperativeValues(Form.formInputsToObject(imperativeForm.current, { includeCheckStatus: true }));
  }

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
              <Button size="sm" onClick={() => toggleOptions(true)}>Options</Button>
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
                  <Button size={size} color="var(--akcent-one)" text="white" radius="0.5em">
                    <TextIcon icon={hasIcon}>Radius</TextIcon>
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
                  <div className="bg-gray">
                    <Ghost size={size} color="var(--akcent-two)" text="white" className="no-text-bg">
                      <TextIcon icon={hasIcon}>No text bg</TextIcon>
                    </Ghost>
                  </div>
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
                  <Underline size={size} color="var(--akcent-one)" text="white" outlineFocus>
                    <TextIcon icon={hasIcon} >Outline focus</TextIcon>
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

                <h5>Underline in navigation</h5>
                <Nav bg="var(--akcent-two)">
                  <Rail className="--rail-spread --stretch">
                    <Rail gap="0">
                      <Underline color="var(--akcent-two)" text="white" size={size} active={navItem === 0} onClick={() => setNavItem(0)}>
                        <TextIcon icon={hasIcon}>Home</TextIcon>
                      </Underline>
                      <Underline color="var(--akcent-two)" text="white" size={size} active={navItem === 1} onClick={() => setNavItem(1)}>
                        <TextIcon icon={hasIcon}>Blog</TextIcon>
                      </Underline>
                      <Underline className="active-inverse" color="var(--akcent-two)" text="white" size={size} active={navItem === 2} onClick={() => setNavItem(2)}>
                        <TextIcon icon={hasIcon}>About</TextIcon>
                      </Underline>
                      <Underline className="active-inverse" disabled color="var(--akcent-two)" text="white" size={size}>
                        <TextIcon icon={hasIcon}>Disabled</TextIcon>
                      </Underline>
                    </Rail>
                    <Underline color="var(--akcent-two)" inverse text="white" size={size} active={navItem === 3} onClick={() => setNavItem(3)}>
                      <TextIcon icon={hasIcon}>Settings</TextIcon>
                    </Underline>
                  </Rail>
                </Nav>


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

                <Rail className="--rail-spread --stretch --v-center">
                  <h4>AspectRatio</h4>
                  <Rail>
                    <Button size="sm" onClick={() => setRatio("16:9")}>16:9 (video)</Button>
                    <Button size="sm" onClick={() => setRatio("8:5")}>8:5</Button>
                    <Button size="sm" onClick={() => setRatio("3:2")}>3:2</Button>
                    <Button size="sm" onClick={() => setRatio("4:3")}>4:3</Button>
                    <Button size="sm" onClick={() => setRatio("1:1")}>1:1 (square)</Button>
                  </Rail>
                </Rail>
                <Grid size="10rem" className="--expand-content">
                  <AspectRatio ratio={ratio}>
                    <Box>{ratio}</Box>
                  </AspectRatio>
                  <AspectRatio ratio={ratio} >
                    <Box>{ratio}</Box>
                  </AspectRatio>
                  <AspectRatio ratio={ratio} >
                    <Box>{ratio}</Box>
                  </AspectRatio>
                  <AspectRatio ratio={ratio} >
                    <Box>{ratio}</Box>
                  </AspectRatio>
                </Grid>

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
            {/* Notice "--flex-column" class to enforce <Columns/> to grow full width without applying width:100% which brakes layout */}
            <Space className="--flex-column" space="1em" stretch inset>
              <Columns minSize="400px">
                <Form onSubmit={data => setForm(data)} includeCheckStatus>
                  <Stack>
                    <Rail className="--expand-content">
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

            <Text as="h2">Form Utilities</Text>
            <Form ref={imperativeForm}>
              <Columns minSize="400px">
                <Rail className="--v-start">
                  <Checkbox name="f1" value="Pixy" color="var(--akcent-one)" />
                  <Checkbox name="f2" value="Dixy" color="var(--akcent-one)" />
                  <Checkbox name="f3" value="Mixy" color="var(--akcent-one)" />
                  <Button size="sm" onClick={imperativeToggle}>Toggle All</Button>
                  <Button size="sm" onClick={imperativeStates}>Show states</Button>
                </Rail>
                <pre>
                  {
                    JSON.stringify(imperativeValues, null, 2)
                  }
                </pre>
              </Columns>
            </Form>

            <Text as="h2">Rail</Text>
            <Rail breakpoint="400px" className="--rail-spread">
              <Box className="nostretch --space-4x-i">1</Box>
              <Box className="nostretch --space-4x-i">2</Box>
              <Box className="nostretch --space-4x-i">3</Box>
            </Rail>

            <Text as="h2">Rail (wrapContent)</Text>
            <Box className="fixbox --space-i">
              <Rail gap="0.5em" wrapContent>
                {
                  badges.map((badge, index) =>
                    <Badge
                      mnw="5em"
                      size={size}
                      key={`badge-${badge}`}
                      className="--h-spread"
                      color={badge % 2 ? "var(--akcent-one)" : "var(--akcent-two)"}>
                      <span className="--stretch-block --text-center">{badge}</span>
                      <Close
                        color="rgba(0,0,0,0.4)"
                        text="rgba(255, 255, 255, 0.6)"
                        onClick={() => closeBadge(index)}
                        focusColor="rgba(255, 255, 255, 0.6)" />
                    </Badge>
                  )
                }
              </Rail>
            </Box>

            <Text as="h2">Stack (with breakpoint)</Text>
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

            <Text as="h2">Sidebar (left)</Text>
            <Sidebar>
              <Box>Sidebar</Box>
              <Box>Content</Box>
            </Sidebar>

            <Text as="h2">Sidebar (right)</Text>
            <Sidebar right>
              <Box>Content</Box>
              <Box>Sidebar</Box>
            </Sidebar>

            <Space space="0 0 3em" />
          </Stack>

          <Text as="h2">Cover</Text>
          <SomeContainer>
            <Cover className="--v-center --h-center">
              <Space space="0 0 0 auto">Top right corner</Space>
              <Space space="auto">Center content</Space>
              <Space space="0 auto 0 0">Bottom left corner</Space>
            </Cover>
          </SomeContainer>

          <hr />

          <Text as="h2">Accordion</Text>
          <Text font="monospace" color="#333">Composition of Button, Rail, Collapse and useState</Text>
          <Space />
          <Stack gap="0" className="--stretch --expand-content">

            <Button className="sharpCorners" onClick={() => selectAccordionIndex(0)}>
              <Rail className="--stretch">
                Accordion One
              </Rail>
            </Button>
            <Collapse open={accordionOpenIndex === 0}>
              <Space space="1em" inset>
                Accordion One Content...
              </Space>
            </Collapse>

            <Button className="sharpCorners" onClick={() => selectAccordionIndex(1)}>
              <Rail className="--stretch">
                Accordion Two
              </Rail>
            </Button>
            <Collapse open={accordionOpenIndex === 1}>
              <Space space="1em" inset>
                Accordion Two Content...
              </Space>
            </Collapse>

            <Button className="sharpCorners" onClick={() => selectAccordionIndex(2)}>
              <Rail className="--stretch">
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
    </GlobalStyles >
  );
}


// render(<CoverTest />, document.getElementById("app"));
render(<Docs />, document.getElementById("app"));
// render(<Interactive />, document.getElementById("app"));