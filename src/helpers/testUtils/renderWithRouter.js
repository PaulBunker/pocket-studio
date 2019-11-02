/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { createMemoryHistory } from "history"
import { Router } from "react-router-dom"
import { create } from "react-test-renderer"

export default (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return create(<Router history={history}>{ui}</Router>)
}
