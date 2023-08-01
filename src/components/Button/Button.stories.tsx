import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    keyLetter: 'K',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    keyLetter: 'B',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    keyLetter: 'K',
    size: 'large',
  },
}

export const Custom: Story = {
  args: {
    keyLetter: 'B',
    size: 'medium',
    styles: {
      backgroundColor: 'white',
      color: 'black',
    },
  },
}
