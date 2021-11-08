# Basic UI Components for React projects


---

## Basic Components

### GlobalStyles

Wrapper component that provides all base-ui utility classes.

```
  import { GlobalStyles } from "@ludekarts/base-ui";

  const App = props => <GlobalStyles><App/></GlobalStyles>;
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **fullCover** | boolean | false | Expands page body to cover entire screen |



#### Available classes

---

**CSS variables**

| Variable name | value |
|---------------|-------|
| `--bui-focus-color` | rgba(66, 153, 225, 0.6) |
| `--bui-box-shadow` | 0px 9px 9px -11px rgba(0, 0, 0, 0.5) |
| `--bui-lift-shadow` | 0px 23px 18px -21px rgba(0, 0, 0, 0.7) |
| `--bui-space` | 0.5rem |
| `--bui-space-2x` | 1rem |
| `--bui-space-3x` | 1.5rem |
| `--bui-space-4x` | 2rem |


**Flex modifiers**

| Class name | Description |
|------------|-------------|
| `--flex-column` | Changes flex display to column |
| `--flex-row-reverse` | Reverse elements oreder in flex row |


**Block modifiers**

| Class name | Description |
|------------|-------------|
| `--stretch` | Set element width to 100% |
| `--stretch-v` | Set element height to 100% |
| `--stretch-block` | Diplay as block element and set width to 100% |
| `--expand-content` | Set width of element children to 100% |
| `--text-center` | Center text |
| `--text-right` | Align text right |
| `--text-left` | Align text left |
| `--text-bold ` | Display bold text |
| `--text-italic` | Display italic text |
| `--text-no-wrap` | Do not wrap text |
| `--first-letter-caps` | Capitalize first letter |


**Spacing outside (margin)**

| Class name | Description |
|------------|-------------|
| `--space` | Set margin to 0.5rem |
| `--space-2x` | Set margin to 1rem |
| `--space-3x` | Set margin to 1.5rem |
| `--space-4x` | Set margin to 2rem |
| `--space-t` | Set margin top to 0.5rem |
| `--space-t-2x` | Set margin top to 1rem |
| `--space-t-3x` | Set margin top to 1.5rem |
| `--space-t-4x` | Set margin top to 2rem |
| `--space-r` | Set margin right to 0.5rem |
| `--space-r-2x` | Set margin right to 1rem |
| `--space-r-3x` | Set margin right to 1.5rem |
| `--space-r-4x` | Set margin right to 2rem |
| `--space-b` | Set margin bottom to 0.5rem |
| `--space-b-2x` | Set margin bottom to 1rem |
| `--space-b-3x` | Set margin bottom to 1.5rem |
| `--space-b-4x` | Set margin bottom to 2rem |
| `--space-l` | Set margin left to 0.5rem |
| `--space-l-2x` | Set margin left to 1rem |
| `--space-l-3x` | Set margin left to 1.5rem |
| `--space-l-4x` | Set margin left to 2rem |

**Spacing inset (padding)**

| Class name | Description |
|------------|-------------|
| `--space-i` | Set padding of 0.5rem |
| `--space-2x-i` | Set padding of 1rem |
| `--space-3x-i` | Set padding of 1.5rem |
| `--space-4x-i` | Set padding of 2rem |
| `--space-t-i` | Set padding top of 0.5rem |
| `--space-t-2x-i` | Set padding top of 1rem |
| `--space-t-3x-i` | Set padding top of 1.5rem |
| `--space-t-4x-i` | Set padding top of 2rem |
| `--space-r-i` | Set padding right of 0.5rem |
| `--space-r-2x-i` | Set padding right of 1rem |
| `--space-r-3x-i` | Set padding right of 1.5rem |
| `--space-r-4x-i` | Set padding right of 2rem |
| `--space-b-i` | Set padding bottom of 0.5rem |
| `--space-b-2x-i` | Set padding bottom of 1rem |
| `--space-b-3x-i` | Set padding bottom of 1.5rem |
| `--space-b-4x-i` | Set padding bottom of 2rem |
| `--space-l-i` | Set padding left of 0.5rem |
| `--space-l-2x-i` | Set padding left of 1rem |
| `--space-l-3x-i` | Set padding left of 1.5rem |
| `--space-l-4x-i` | Set padding left of 2rem |

**Push content in flex containers (margin)**

| Class name | Description |
|------------|-------------|
| `--push-top` | Set margin bottom to auto |
| `--push-left` | Set margin right to auto |
| `--push-right` | Set margin left to auto |
| `--push-bottom` | Set margin top to auto |


**Verical flex alignment**

| Class name | Alias | Description |
|------------|-------|-------------|
| `--v-start` | `--stack-start` | Align content to the TOP of the element |
| `--v-end` | `--stack-end` | Align content to the BOTTOM of the element |
| `--v-stretch` | `--stack-stretch` | Stretch content vertically |
| `--v-center` | `--stack-center` | Align content to the CENTER of the element |


**Horizontal flex alignment**

| Class name | Alias | Description |
|------------|-------|-------------|
| `--h-start` | `--rail-start` | Align content to the SATRT of the element |
| `--h-end` | `--rail-end` | Align content to the END of the element |
| `--h-center` | `--rail-center` | Align content to the CENTER of the element |
| `--h-spread` | `--rail-spread` | Spread content to the sides of the element |
| `--h-evenly` | `--rail-evenly` | Spread content to evenly across the element |
| `--h-around` | `--rail-around` | Spread content with wcen space between inside the element |
|


**Default focus**

| Class name | Description |
|------------|-------------|
| `--focusable` | Add default focus behaviour to the element |


**Cover Link**

| Class name | Description |
|------------|-------------|
| `--cover-link > a.--link` | Sets element postion to `relative` and changes interlan `<a/>` tag with `--link` class into "cover glass" |


### Text

Component for convinient text formatting.

```
  import { Text } from "@ludekarts/base-ui";

  . . .

  <Text as="h1" color="red" size="1.4em">This is h1 tag</Text>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **as** | string | span | Display as given element |
| **lh** | string | undefined | Line height |
| **font** | string | undefined | Font family |
| **size** | string | undefined | Font size |
| **weight** | string | undefined | Font weight |
| **color** | string | undefined | Text color |
| **spacing** | string | undefined | Margin |
| **padding** | string | 0 | Padding |
| **transform** | string | false | Text transform |
| **ellipsis** | boolean | false | Crop text with ellipsis |
| **block** | boolean | false | Display as block |


### Form

Regular form with customized **onSubmit** handler with utilities for handling form data.

```
  import { Form } from "@ludekarts/base-ui";

  . . .

  const handleSubmit = data => {
    // data: object with all input fields names and their values e.g: { inputName: inputValue }.
  };

  <Form onSubmit={handleSubmit}>...</Form>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **children** | node | null | Component children |
| **onSubmit** | function | undefined | Callback fn called when user submits data |
| **includeCheckStatus** | boolean | false | By default only selected checkboxes will appear in *onSubmit* handlers data. If set to `true` all checkboxes will report their current check-status. |


**Static helpers**

| Helper name | Description |
|-------------|-------------|
| **Form.formInputsToObject(** formRef, { includeCheckStatus: fasle } **)** | Internaly used to transform form's data into object |
| **Form.hardFormReset(** formRef, { resetValue: false } **)** | Allows to imperatively set all checkbox values to given *resetValue* |

### Badge

Rounded badge.

```
  import { Badge } from "@ludekarts/base-ui";

  . . .

  <Badge>20</Badge>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **mnw** | string | 3rem | Minimal badge width |
| **color** | string | #CCCCCC | Background color |
| **justify** | string | center | Content justify (flex) |


---


## Interactive

### Collapse

Animated container that can expand on it's content.

```
  import { Collapse } from "@ludekarts/base-ui/interactive";

  . . .

  const [showCollapse, toggleCollapse] = useState(false);

  <Collapse open={showCollapse} mnh={36}>Lorem ipsum dolor sit ammet...</Collapse>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **open** | boolean | false | Current state of collapse container. Is external. |
| **mxh** | number | undefined | Maximal height of the container |
| **mnh** | number | undefined | Minimal height of the container |



### Slider

Container that slides its content horizontally or vertically.

```
  import { Slider } from "@ludekarts/base-ui/interactive";

  . . .

  const [activeSlide, setActiveSlide] = useState(0);

  <Wrapper styles={{width: "200px", height: "200px", position: "relative"}}>
    <Slider activeIndex={activeSlide} variant="vertical" loop>
      <div>SLIDE 1</div>
      <div>SLIDE 2</div>
      <div>SLIDE 3</div>
      <div>SLIDE 4</div>
      <div>SLIDE 5</div>
    </Slider>
  </Wrapper>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **activeIndex** | number | 0 | Currently displayed slide |
| **variant** | string | horizontal | Animation: `horizontal` or `vertical` |
| **loop** | boolean | false | Make slides loops form last to first an back |
| **fitHeight** | boolean | false | Fit Slider height to its content |

> **NOTE:**
>
> By default Slider expands to fill its container. You need to define the dimensions for the container.



### BreakpointClass

Switches classes base on given brakpoint.

```
  import { BreakpointClass } from "@ludekarts/base-ui/interactive";

  . . .
  
  <BreakpointClass breakpoint="(max-width: 980px)" beforeClass="class-a" afterClass="class-b">
    <div>Element 1</div>
    <div>Element 2</div>
  </BreakpointClass>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **breakpoint** | string | REQUIRED | Media brekpoint which changes the clsses |
| **beforeClass** | string |  | List of classes before applying breakpoint |
| **afterClass** | string |  | List of classes after applying breakpoint |

---

## Buttons

### Basic

Simple, regular button.

```
  import { Button } from "@ludekarts/base-ui/buttons";

  . . .

  <Button>Hello</Button>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **size** | string | md | Button size, one of: [lg, md, sm] |
| **text** | string | inherit | Text color |
| **color** | string | #DDDDDD | Background color |
| **radius** | string | 0.2em | Button rounded corner |
| **type** | string | button | Button type. To use thie component as a Submin button we need to specify `submit` type |
| **disabled** | bool | false | Disable state |
| **inverse** | bool/number | undefined | Inverse colors |

> **NOTE:**
>
> All buttons have their boolean attributes defined as `bool/number` type. This allows to convert a button into `Link` tag from react-router-dom. When used as Link set *boolean attribute (e.g. inverse)* should ne set to numeric value: `1/0`.


### Underline

Button with animated underline .

```
  import { Underline } from "@ludekarts/base-ui/buttons";

  . . .

  <Underline>Hello</Underline>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **size** | string | md | Button size, one of: [lg, md, sm] |
| **text** | string | #000000 | Text color |
| **color** | string | #999999 | Background color |
| **type** | string | button | Button type. To use thie component as a Submin button we need to specify `submit` type |
| **disabled** | bool | false | Disable state |
| **active** | bool/number | undefined | Active state |
| **inverse** | bool/number | undefined | Inverse colors |
| **outlineFocus** | bool/number | undefined | Apply outline focus |
| **.active** | className |  | Same as `active` prop |
| **.active-inverse** | className |  | Inverse colors of active state |


### Ghost

Button with thick border empty inside.

```
  import { Ghost } from "@ludekarts/base-ui/buttons";

  . . .

  <Ghost>Hello</Ghost>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **size** | string | md | Button size, one of: [lg, md, sm] |
| **text** | string | inherit | Text color |
| **color** | string | #999999 | Background color |
| **type** | string | button | Button type. To use thie component as a Submin button we need to specify `submit` type |
| **disabled** | bool | false | Disable state |
| **active** | bool/number | undefined | Active state |
| **inverse** | bool/number | undefined | Inverse colors |
| **uppercase** | bool/number | undefined | Uppercase text |
| **rounded** | bool/number | undefined | Set rounded corners |
| **.no-text-bg** | className |  | Disables text color background |


### Highlight

Button for highlight icons or glyphs.

```
  import { Highlight } from "@ludekarts/base-ui/buttons";

  . . .

  <Highlight>+</Highlight>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **size** | string | md | Button size, one of: [lg, md, sm] |
| **color** | string | rgba(0, 0, 0, 0.15) | Background color |
| **activeText** | string | false | Text color |
| **square** | bool/number | undefined | Do not use rounded corners |
| **outline** | bool/number | undefined | Show outline |
| **active** | bool/number | undefined | Active state |


### Switch

Checkbox/Radio component with visual appearance of dot slider.

```
  import { Switch } from "@ludekarts/base-ui/buttons";

  . . .

  <Switch name="mySwitch" size="lg" color="red" offColor="gray" />
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **name** | string | REQUIRED | Input name |
| **id** | string | same as **name** | Input ID |
| **type** | checkbox/radio | checkbox | Input type |
| **size** | string | md | Button size, one of: [lg, md, sm] |
| **squared** | bool | false | Use square corners |
| **color** | string | false | Background color |
| **offColor** | string | false | Background color for OFF state |


### Checkbox

Checkbox/Radio component with visual appearance of checkbox with a checkmark inside.

```
  import { Checkbox } from "@ludekarts/base-ui/buttons";

  . . .

  <Checkbox name="c3" color="red" defaultChecked />
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **name** | string | REQUIRED | Input name |
| **id** | string | same as **name** | Input ID |
| **type** | checkbox/radio | checkbox | Input type |
| **bg** | bool | false | Background color |
| **color** | bool | false | Checkmark color |
| **rounded** | bool | false | Use rounded corners |


### Close

Internally used close button for panels.

```
  import { Close } from "@ludekarts/base-ui/buttons";

  . . .

  <Close onClick={() => {}} size="2em" />
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **text** | string | inherit | Icon color |
| **color** | string | #EEEEEE | Background color |
| **size** | string | 1.5em | Icon size |
| **type** | string | button | Button type |
| **spacing** | string | 3px | Margin around icon |
| **focusColor** | string | rgba(66, 153, 225, 0.6) | Focus outline color |


---

## Layout


### Container

Description

```
  import { Container } from "@ludekarts/base-ui/layout";

  . . .

  <Container mxw="1200px">
    Content
  </Container>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **mxw** | string | 78rem | Maximal container width |
| **offsetTop** | string | 2rem | Offset from the top (margin-top) |
| **spacing** | string | 0 1.5em" | Inside spacing (padding) |


### Stack

Arranges content items one under another.

```
  import { Stack } from "@ludekarts/base-ui/layout";

  . . .

  <Stack breakpoint="14rem">
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    ...
  </Stack>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **gap** | string | 1em | Space between items |
| **mxw** | bool/number | undefined | Sets max-width range for media query. By default Stack breaks at `min-width` |
| **breakpoint** | string | undefined | Min-width to break into rail layout |


### Rail

Arranges content items one next to another.

```
  import { Rail } from "@ludekarts/base-ui/layout";

  . . .

  <Rail gap="0.5em">
    <div>Item</div>
    <div>Item</div>
    <div>Item</div>
    ...
  </Rail>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **gap** | string | 1em | Space between items |
| **mnw** | bool/number | undefined | Sets min-width range for media query. By default Stack breaks at `max-width` |
| **breakpoint** | string | undefined | Max-width to break into stack layout |
| **wrapContent** |  bool/number | undefined | Allows overflow item to wrap inside container |

> **NOTE:**
>
> Most effective usage of this component can be achieved with accompaniment of Vertical & Horizontal Alignment from `<Global Styles/>` component.

### Grid

Organize content in dynamic grid.

```
  import { Grid } from "@ludekarts/base-ui/layout";

  . . .

  <Grid>
    <div>Cell</div>
    <div>Cell</div>
    <div>Cell</div>
    <div>Cell</div>
    ...
  </Grid>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **gap** | string | 1em | Space between cells |
| **size** | string | 16rem | Minimal cell size |
| **align** | string | center | Cell's content alignment |


### Columns

Displays children in columns.

```
  import { Columns } from "@ludekarts/base-ui/layout";

  . . .

  <Columns>
    <div>1 column</div>
    <div>2 column</div>
    ...
  </Columns>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **gap** | string | 1em | Space between columns |
| **minSize** | string | 14rem | Minimal one column size |


### Cover

Covers parent container.

```
  import { Cover, Space } from "@ludekarts/base-ui/layout";

  . . .

  <Cover className="--v-center --h-center">
    <Space space="0 0 0 auto">Top right corner</Space>
    <Space space="auto">Center content</Space>
    <Space space="0 auto 0 0">Bottom left corner</Space>
  </Cover>
```


### Sidebar

Displays children (only 2) as a sidebar and main content.

```
  import { Sidebar } from "@ludekarts/base-ui/layout";

  . . .

  <Sidebar>
    <aside>Sidebar content</aside>
    <main>Main content</main>
  </Sidebar>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **gap** | string | 1em | Space between sidebar nad content |
| **breakAt** | string | 50% | Minial content width |
| **sideWidth** | string | 15em | Sidebar width |
| **right** | boolean | false | Places sidebar on the right side |


### Space

Manipulates negative space.

```
  import { Space } from "@ludekarts/base-ui/layout";

  . . .

  <Space />

  <Space>
    Content
  </Space>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **space** | string | 1em 0 0 | Amount of negative space (margin/padding) in given units. By default uses margin |
| **inset** | boolean | false | If set to `true` negative space is calculated as padding |
| **minmax** | string | min | Media query "direction" min-width or max-width |
| **breakpoint** | string | undefined | Media query breakpoint |
| **spaceBefore** | string | undefined | Space before applying breakpoint. Takes precedence of `space` prop |
| **spaceAfter** | string | undefined | Space after applying breakpoint. Takes precedence of `space` prop |


---

## Media


### Image

Displats image with additional fallback error to image placeholder.

```
  import { Image } from "@ludekarts/base-ui/media";

  . . .

  <Image src="https://url/to/image.jpg" alt="This is image description" />
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **src** | string | false | Image source |
| **alt** | string | false | Accessible image description |
| **size** | string | false | Image width & height |
| **width** | string | 100% | Image width |
| **height** | string | auto | Image height |


### Avatar

Image with same width and height.

```
  import { Avatar } from "@ludekarts/base-ui/media";

  . . .

  <Avatar src="https://url/to/image.jpg" size="2em" />
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **size** | string | 3rem | Avatar width & height |
| **rounded** | string | 50% | Amount of corners rounding |

### AspectRatio

Renders container size with given ratio

```
  import { AspectRatio } from "@ludekarts/base-ui/media";

  . . .

  <AspectRatio>
    Content
  </AspectRatio>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **ratio** | string | video | One of the value form table below |
| **turnOffAt** | string | undefined | Max-width to turn off scaling |

**Ratios**

| Prop value |
|------------|
| video  |
| 16:9   |
| 8:5    |
| 3:2    |
| 4:3    |
| 1:1    |
| square |

---

## Panels

### Overlay

Black animated panel that covers entire screen.

```
  import { Overlay } from "@ludekarts/base-ui/panels";

  . . .

  <Overlay>
    Content
  </Overlay>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **open** | bool | false | Overlay open state |
| **top** | number | 0 | Top offset |
| **tint** | number | 0.9 | Transparency |
| **zIndex** | number | 1500 | Z-index |
| **delayIn** | number | 0 | Delay for in-animation |
| **delayOut** | number | 0 | Delay for out-animation |
| **duration** | number | 0.3 | Animation duration |


### Drawer

Animated panels that slides-in from right side of the screen.

```
  import { Drawer } from "@ludekarts/base-ui/panels";

  . . .

  const [showDrawer, toggleDrawer] = useState(false);

  <Drawer open={showDrawer} onClose={() => toggleDrawer(false)}>
    Content
  </Drawer>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **open** | bool | false | Drawer open state |
| **nested** | bool | false | Set to `true` if drawer is nested in another drawer |
| **noOverlay** | bool | false | Toggles background *Overlay* component |
| **top** | string | 0 | Top offset |
| **width** | string | 18rem | Deawer width |
| **onClose** | function | undefined | On close callback. If defined *Close* button will appear in the drawer |


### Modal

Description

```
  import { Modal } from "@ludekarts/base-ui/panels";

  . . .

    const [showModal, togglwModal] = useState(false);

  <Modal open={showModal} onClose={() => togglwModal(false)}>
    Content
  </Modal>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **open** | bool | false | Modal open state |
| **onClose** | function | undefined | On close callback. If defined *Close* button will appear in the modal |


### Dropdown

Animated dropdown panel that can be triggered by adding `data-bui-dropdown-target` attribute with a `dropdownName` to any element.

```
  import { Dropdown } from "@ludekarts/base-ui/panels";

  . . .

  <button data-bui-dropdown-target="dropdownName">Toggle my dropdown</button>

  <Dropdown name="dropdownName" onToggle={ toggleState => {} } autoHide>
    Content
  </Dropdown>
```

**Props**

| Prop name | Type | Default | Description |
|-----------|------|---------|-------------|
| **name** | string | REQUIRED | Unique name that allow to identify target dropdown |
| **onToggle** | function | undefined | Callback fn called with current *toggleState* |
| **autoHide** | boolean | fasle | If set to `true` dropdown will automatically close after user click |

---

## Progress

> In progress ...


