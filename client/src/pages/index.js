import React, { Fragment } from 'react'
import { Router } from '@reach/router'
/** importing our pages */
import Tracks from './tracks'
import Track from './Track'
import EmbeddedSandbox from './EmbeddedSandbox'

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Tracks path="/" />
      <Track path="track/:trackId" />
      <EmbeddedSandbox path="sandbox" />
    </Router>
  );
}
