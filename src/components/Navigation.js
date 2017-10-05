import React, { Component } from 'react'
import { Image, Button, Dropdown, Menu, Header } from 'semantic-ui-react'

const src='/logo.png';

export default class MenuExampleSizeMassive extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large'>
        <Menu.Item>
          <Header as='h2'>BridesMail</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary>Sign In</Button>
          </Menu.Item>
          <Menu.Item>
            <Button secondary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
