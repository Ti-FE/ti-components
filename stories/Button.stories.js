import React from 'react'

import { TiButton } from '..'

export default {
  title: 'TiButton',
  component: TiButton
}

export const Basic = () => <TiButton basic={true}>Basic Button</TiButton>

export const Primary = () => <TiButton primary={true}>Primary Button</TiButton>

export const Negative = () => (
  <TiButton negative={true}>Negative Button</TiButton>
)

export const Disabled = () => (
  <TiButton disabled={true}>Disabled Button</TiButton>
)

export const Icon = () => <TiButton icon="settings" />
