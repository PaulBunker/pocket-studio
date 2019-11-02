import React from "react"
import { act } from "react-test-renderer"
import MatchMediaMock from "match-media-mock"
import App, { DESKTOP_WIDE_BREAKPOINT } from "./App"
import Menu from "./components/menu/menu"
import MenuIcon from "./components/menuIcon/menuIcon"
import renderWithRouter from "./helpers/testUtils/renderWithRouter"

window.matchMedia = MatchMediaMock.create()

it("renders with menu in open state", () => {
  act(() => {
    window.matchMedia.setConfig({
      type: "screen",
      width: DESKTOP_WIDE_BREAKPOINT
    })
  })
  const testInstance = renderWithRouter(<App />).root
  expect(testInstance.findByType(Menu).props.isOpen).toBe(true)
})

it("renders with menu in closed state", () => {
  act(() => {
    window.matchMedia.setConfig({ type: "screen", width: 100 })
  })
  const testInstance = renderWithRouter(<App />).root
  expect(testInstance.findByType(Menu).props.isOpen).toBe(false)
})

it("does not render menu icon when screen is wide", () => {
  act(() => {
    window.matchMedia.setConfig({
      type: "screen",
      width: DESKTOP_WIDE_BREAKPOINT
    })
  })
  const testInstance = renderWithRouter(<App />).root
  expect(testInstance.findAllByType(MenuIcon).length).toBe(0)
})

it("does render menu icon when screen is narrow", () => {
  act(() => {
    window.matchMedia.setConfig({
      type: "screen",
      width: "100px"
    })
  })
  const testInstance = renderWithRouter(<App />).root
  expect(testInstance.findAllByType(MenuIcon).length).toBe(1)
})
