/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { create } from "react-test-renderer"
import { BrowserRouter as Router } from "react-router-dom"
import MenuLink from "./menuLink"

const props = {
  text: "link text",
  target: "target",
  id: 1
}

describe.only("Testing the MenuLink component", () => {
  it("renders a link", () => {
    const link = create(
      <Router>
        <MenuLink {...props} />
      </Router>
    )
    expect(link).toMatchSnapshot()
  })
})
