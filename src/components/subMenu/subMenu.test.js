/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { create, act } from "react-test-renderer"
import SubMenu from "./subMenu"
import MenuLink from "../menuLink/menuLink"

const testData = {
  text: "Get started with PocketStudio",
  menu: [
    { type: "link", title: "Add media", target: "add-media" },
    { type: "link", title: "Mark clips", target: "mark-clips" },
    { type: "link", title: "Delete Media", target: "delete-media" }
  ]
}

describe("Testing SubMenu component", () => {
  it("renders title text", () => {
    const { root } = create(<SubMenu {...testData} />)
    root.find(
      el =>
        el.type === "button" && el.children && el.children[0] === testData.text
    )
  })

  it("does not render the sub links", () => {
    const { root } = create(<SubMenu {...testData} />)
    const links = root.findAllByType(MenuLink)
    expect(links.length).toBe(0)
  })

  it("renders the sub menu links after clicking the button", () => {
    const { root } = create(<SubMenu {...testData} />)
    act(() => {
      root.findByType("button").props.onClick()
    })
    const links = root.findAllByType(MenuLink)
    expect(links.length).toBe(testData.menu.length)
  })
})
