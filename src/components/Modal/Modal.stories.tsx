import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'
import { DownArrowIcon } from './utils'
import { Group } from './Modal.types'

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

const listA: Group[] = [
  {
    sectionName: 'Repositories',
    items: [
      {
        icon: <DownArrowIcon size={14} />,
        title: 'How to make a good repo',
        url: '/repo',
      },
      {
        icon: '🚀',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
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
  {
    sectionName: 'Projects',
    items: [
      {
        icon: '🏋️‍♀️',
        title: 'How to make a good repo',
      },
      {
        icon: '📸',
        title: 'This is another one to check',
      },
    ],
  },
  {
    sectionName: 'Something',
    items: [
      {
        icon: '🏋️‍♀️',
        title: 'How to make a good repo',
        url: 'https://google.lk',
      },
      {
        icon: '📸',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
      {
        icon: '🏋️‍♀️',
        title: 'How to make a good repo',
        url: 'https://google.lk',
      },
      {
        icon: '📸',
        title: 'This is another one to check',
        url: 'https://google.lk',
      },
    ],
  },
]

export const Small: Story = {
  args: {
    data: listA,
    isOpen: true,
    toggle: () => {},
    username: 'home',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    data: listA,
    isOpen: true,
    toggle: () => {},
    username: 'home',
    perSectionLimit: 3,
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    data: listA,
    isOpen: true,
    toggle: () => {},
    username: 'home',
    size: 'large',
  },
}
