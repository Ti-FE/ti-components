import React from 'react'

import { Feed, Icon } from 'semantic-ui-react'
import { TiCard } from '..'

export default {
  title: 'TiCard',
  component: TiCard
}

export const Basic = () => <TiCard>Basic Card</TiCard>

export const Notifications = () => (
  <TiCard>
    <Feed>
      <Feed.Event>
        <Feed.Label>
          <Icon loading name="spinner" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Date content="1 second ago" />
          <Feed.Summary>
            <a>test-instance</a> is initializing.
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label icon="check circle" />
        <Feed.Content>
          <Feed.Date content="2 minutes ago" />
          <Feed.Summary>
            You added <a>test-instance</a> to <a>cluster list</a>.
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label icon="check circle" />
        <Feed.Content>
          <Feed.Date content="2 days ago" />
          <Feed.Summary>
            <a>cluster-1</a> has been removed from the <a>cluster list</a>.
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </TiCard>
)
