import React from 'react'
import styled from 'styled-components'

import { Card, CardProps } from 'semantic-ui-react'

const StyledCard = styled(Card)`
  &&&.ui.card {
    width: auto;
    margin: var(--content-margin, 2rem);
    box-shadow: var(--card-shadow, 0 3px 6px 0 rgba(0, 0, 0, 0.1));
    border-radius: var(--border-radius, 4px);

    & > .content:not([class*='header']) {
      padding: var(--content-padding, 2rem);
    }
  }
`

export default (props: CardProps) => {
  const { header, children, ...cardProps } = props

  return (
    <StyledCard className="ti-card STYLED-COMPONENT-ID" {...cardProps}>
      {header && <Card.Content className="header">{header}</Card.Content>}

      <Card.Content>{children}</Card.Content>
    </StyledCard>
  )
}
