/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { createMemoryHistory } from "history"
import { MemoryRouter } from "react-router-dom"
import { create } from "react-test-renderer"

export default (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <MemoryRouter history={history}>{children}</MemoryRouter>
  )
  return {
    ...create(ui, { wrapper: Wrapper }),
    history
  }
}
