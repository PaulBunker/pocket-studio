/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { create, act } from "react-test-renderer"
import { BrowserRouter as Router, Link } from "react-router-dom"
import SubMenu from "./subMenu"
import MenuLink from "../menuLink/menuLink"

const testData = {
  text: "Get started with PocketStudio",
  menu: [
    { type: "link", text: "Add media", target: "add-media" },
    { type: "link", text: "Mark clips", target: "mark-clips" },
    { type: "link", text: "Delete Media", target: "delete-media" }
  ]
}

describe("Testing SubMenu component", () => {
  it("renders title text", () => {
    const { root } = create(
      <Router>
        <SubMenu {...testData} />
      </Router>
    )
    const button = root.findByType("button")
    expect(button.children[1]).toBe(testData.text)
  })

  // it("does not render the sub links", () => {
  //   const { root } = create(<SubMenu {...testData} />)
  //   const links = root.findAllByType(MenuLink)
  //   expect(links.length).toBe(0)
  // })

  // it("renders the sub menu links after clicking the button", () => {
  //   const { root } = create(<SubMenu {...testData} />)
  //   act(() => {
  //     root.findByType("button").props.onClick()
  //   })
  //   const links = root.findAllByType(MenuLink)
  //   expect(links.length).toBe(testData.menu.length)
  // })
})
