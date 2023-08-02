import type { Meta, StoryObj } from '@storybook/react'
import CommandK from './CommandK'
import { Group } from '../Modal/Modal.types'

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

const listA: Group[] = [
  {
    sectionName: 'Repositories',
    items: [
      {
        icon: '🗂',
        title: 'How to make a good repo',
        url: '/repo',
      },
      {
        icon: '🚀',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
    ],
  },
  // {
  //   sectionName: 'Projects',
  //   items: [
  //     {
  //       icon: '🏋️‍♀️',
  //       title: 'How to make a good repo',
  //     },
  //     {
  //       icon: '📸',
  //       title: 'This is another one to check',
  //     },
  //   ],
  // },
  // {
  //   sectionName: 'Something',
  //   items: [
  //     {
  //       icon: '🏋️‍♀️',
  //       title: 'How to make a good repo',
  //       url: 'https://google.lk',
  //     },
  //     {
  //       icon: '📸',
  //       title: 'This is another one to check',
  //       url: 'https://google.lk',
  //     },
  //     {
  //       icon: '🏋️‍♀️',
  //       title: 'How to make a good repo',
  //       url: 'https://google.lk',
  //     },
  //     {
  //       icon: '📸',
  //       title: 'This is another one to check',
  //       url: 'https://google.lk',
  //     },
  //   ],
  // },
]

export const Small: Story = {
  args: {
    keyLetter: 'K',
    modalSize: 'small',
    buttonSize: 'small',
    data: listA,
  },
}

export const Medium: Story = {
  args: {
    keyLetter: 'K',
    modalSize: 'medium',
    buttonSize: 'medium',
    data: listA,
    customStyles: {
      opacity: 0.9,
    },
  },
}

export const Large: Story = {
  args: {
    keyLetter: 'K',
    modalSize: 'large',
    buttonSize: 'large',
    data: listA,
  },
}
