<div align="center">
  <h1>CommandK</h1>
  <p>A compact React component and npm package enabling quick website search through a modal, triggered by pressing Command + K</p>
  <a href="https://www.npmjs.com/package/commandk">
   <img src="https://img.shields.io/npm/dm/commandk.svg?color=%235599ff&style=for-the-badge" alt="npm Downloads per Month">
  <a>
  <a href="https://github.com/dulajkavinda/commandK/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/commandk.svg?color=%23c677cf&style=for-the-badge" alt="MIT License">
  </a>
  <br>
  <br>
</div>

## Table of contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Data](#data)   
- [API](#api)
- [Accessibility](#accessibility)
- [Local Development](#local-development)
- [Contributing](#contributing)
- [License](#license)
  
## Features
Currently, commandK supports the following:

 - [x] Responsive search popup
 - [x] Open the popup using `Command` + `K`
 - [x] Filter items based on search terms
 - [x] Supports 3 sizes for the modal (medium, large and small)
 - [x] Supports custom styles
 - [x] Navigation with keyboard
 - [ ] Light mode support
 
You can suggest new features [here](https://github.com/dulajkavinda/commandK/issues)

## Installation

### Package Managers

```bash
# npm
npm i commandk

# yarn
yarn add commandk

# pnpm
pnpm i commandk
```

## Usage

```js
import { CommandK } from 'commandk'

<CommandK data={[]} />
```

Or you can access the `Modal` component and `Button` component separately and implement your own logic.

```js
import React from "react"
import { Modal, Button } from 'commandk'

const App = () => {

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      {isOpen && <Modal data={[]} toggle={() => setIsOpen(false)} />}
      <Button onClick={() => setIsOpen(true)} />
    </>
  )
}

export default App;
```

### Data

Structure of the data that's taken by the component,

**TS Definition**
```js
export interface Item {
  icon: string
  title: string
  url?: string
}

interface Group {
  sectionName: string
  items: Item[]
}
```
**Sample**
```js
const list: Group[] = [
  {
    sectionName: 'Repositories',
    items: [
      {
        icon: '🗂',
        title: 'This is a test title',
        url: '/repo',
      },
      {
        icon: '🚀',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
    ],
  },
]
```

## API

### CommandK

| Parameter                    | Description                                               | Type                         | Default          |
| ---------------------------- | --------------------------------------------------------- | ---------------------------- | ---------------- |
| data                         | data needed to populate the search modal                  | Array                        | []               |
| keyLetter                    | key that needs be appear on the button                    | string                       | `K`              |                                                                                   
| buttonSize                   | size of the button                                        | `small` `medium` `large`     | `medium`         | 
| modalSize                    | size of the modal                                         | `small` `medium` `large`     | `medium`         |
| username                     | name of the search modal                                  | string                       | home             |
| perSectionLimit              | limit numner of items in a section                        | number                       | -                |
| customStyles                 | the style of the component                                | Object                       | {}               |

### Modal

| Parameter                    | Description                                               | Type                         | Default          |
| ---------------------------- | --------------------------------------------------------- | ---------------------------- | ---------------- |
| data                         | data needed to populate the search modal                  | Array                        | []               |
| isOpen                       | to open and close the modal                               | boolean                      | `false`          |                                                                                   
| size                         | size of the modal                                         | `small` `medium` `large`     | `medium`         |
| username                     | name of the search modal                                  | string                       | home             |
| perSectionLimit              | limit numner of items in a section                        | number                       | -                |
| toggle                       | close the modal                                           | Function                     | () => null       |

### Button

| Parameter                    | Description                                               | Type                         | Default          |
| ---------------------------- | --------------------------------------------------------- | ---------------------------- | ---------------- |
| keyLetter                    | key that needs be appear on the button                    | string                       | `K`              |                                                                                       
| size                         | size of the modal                                         | `small` `medium` `large`     | `medium`         |
| styles                       | the style of the component                                | Object                       | {}               |
| toggle                       | open  the modal                                           | Function                     | () => null       |

## Local Development

The `main` branch contains the latest version of the CommandK component.

To begin local development:

1. `yarn install`
2. `yarn run storybook`

Storybook will appear on on http://localhost:6006

You can run `yarn test` to execute the test suite and linters. To help you develop the component we’ve set up some tests that cover the basic functionality (can be found in `<component>/__tests__`).
To check the test coverage you can run `yarn coverage`.

## Accessibility

### Keyboard support

- _Down_: Navigate through the searched items.
- _Command/K_: open and close the search modal.

## Contributing
Contributions are welcome! If you have any ideas, bug reports, or feature requests, please submit them through the GitHub issue tracker. If you would like to contribute code, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License
This project is licensed under the MIT License. You can find more information in the [LICENSE](https://github.com/dulajkavinda/commandK/blob/main/LICENSE) file.

#
If you need to reach out to me [contact me](mailto:hi@dulaj.dev).








