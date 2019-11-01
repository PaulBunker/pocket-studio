/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import { create } from "react-test-renderer"
import MenuLink from "./menuLink"

const onClick = jest.fn()

const props = {
  activeLinkId: 3,
  onClick,
  text: "link text",
  target: "target",
  id: 1
}

describe("Testing the MenuLink component", () => {
  it("renders a link", () => {
    const link = create(<MenuLink {...props} />).toJSON()
    expect(link).toMatchSnapshot()
  })

  it("is not active when activeLinkId is different to id", () => {
    const { root } = create(<MenuLink {...props} />)
    expect(root.findByType("a").props.className).toBe("link")
    expect(root).toMatchSnapshot()
  })

  it("has active class when activeLinkId matches id", () => {
    const updatedProps = { ...props, id: props.activeLinkId }
    const { root } = create(<MenuLink {...updatedProps} />)
    expect(root.findByType("a").props.className).toBe("link active")
    expect(root).toMatchSnapshot()
  })
})
