import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import DockMonitor from 'redux-devtools-dock-monitor';
import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor'

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <FilterableLogMonitor />
  </DockMonitor>
);

export default DevTools;