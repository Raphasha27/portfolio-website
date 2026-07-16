import { describe, it, expect } from 'vitest'

describe('App', () => {
  it('should export a component', () => {
    // Basic smoke test — App module exists and exports a default
    const App = require('../App.jsx')
    expect(App).toBeDefined()
  })
})
