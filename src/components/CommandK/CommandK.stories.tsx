import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CommandK from './CommandK'

export default {
  title: 'CommandK',
  component: CommandK,
} as ComponentMeta<typeof CommandK>

const Template: ComponentStory<typeof CommandK> = (args) => <CommandK {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary',
}
