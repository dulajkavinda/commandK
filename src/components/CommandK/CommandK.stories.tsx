import type { Meta, StoryObj } from '@storybook/react'
import CommandK from './CommandK'

const meta = {
  title: 'CommandK',
  component: CommandK,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CommandK>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    keyLetter: 'K',
    modalSize: 'small',
    buttonSize: 'small',
  },
}

export const Medium: Story = {
  args: {
    keyLetter: 'K',
    modalSize: 'medium',
    buttonSize: 'medium',
  },
}

export const Large: Story = {
  args: {
    keyLetter: 'K',
    modalSize: 'large',
    buttonSize: 'large',
  },
}
