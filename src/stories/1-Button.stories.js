import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

import { TiButton } from '../components'

import '../index.css'
import 'semantic-ui-css/semantic.min.css'

export default {
  title: 'Button',
  component: Button
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

Text.story = {
  parameters: {
    notes: 'A small test story of the button.'
  }
}

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

export const Basic = () => <TiButton basic={true}>Basic Button</TiButton>

export const Primary = () => <TiButton primary={true}>Primary Button</TiButton>

export const Negative = () => (
  <TiButton negative={true}>Negative Button</TiButton>
)

export const Disabled = () => (
  <TiButton disabled={true}>Disabled Button</TiButton>
)

export const Icon = () => <TiButton icon="settings" />
