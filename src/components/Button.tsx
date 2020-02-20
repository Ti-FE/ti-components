import React from 'react'
import { Button, ButtonProps } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  &&& {
    margin: 0.5em;
  }

  &&&,
  &&&:focus,
  &&&:active,
  &&&:hover {
    background-color: var(--light-bg, #e7f0fc);
    color: var(--text-color, #707070);
  }

  &&&:focus,
  &&&:active,
  &&&:hover {
    box-shadow: var(--button-shadow, 0 3px 6px 0 rgba(0, 0, 0, 0.16));
  }

  &&&:disabled {
    background-color: var(--light-bg, #e7f0fc);
    color: var(--disabled-color, #9fa8b9);
  }

  &&&.primary,
  &&&.primary:active,
  &&&.primary:hover {
    background-color: var(--primary-color, #2e2fff) !important;
    color: #fff !important;
  }

  &&&.negative,
  &&&.negative:active,
  &&&.negative:hover {
    background-color: var(--negative-color, #ff4f5e) !important;
    color: #fff !important;
  }

  &&&.basic {
    background-color: transparent !important;
    border: 1px solid var(--primary-color, #2e2fff) !important;
    box-shadow: none !important;
    color: var(--primary-color, #2e2fff) !important;

    &:hover {
      background-color: var(--primary-color, #2e2fff) !important;
      box-shadow: none !important;
      color: #fff !important;
    }
  }

  &&&.basic.negative {
    background-color: transparent !important;
    border: 1px solid var(--negative-color, #ff4f5e) !important;
    box-shadow: none !important;
    color: var(--negative-color, #ff4f5e) !important;

    &:hover {
      background-color: var(--negative-color, #ff4f5e) !important;
      box-shadow: none !important;
      color: #fff !important;
    }
  }

  &.ui.icon.button {
    background-color: transparent;
    box-shadow: none;
    color: var(--text-color, #707070);

    &:hover {
      background-color: var(--light-bg, #e7f0fc);
    }
  }
`

export default (props: ButtonProps) => (
  <StyledButton className="ti-button STYLED-COMPONENT-ID" {...props} />
)
