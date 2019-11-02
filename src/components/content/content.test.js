import React from "react"
import { create, act } from "react-test-renderer"
import Content from "./content"

describe("testing content component", () => {
  it("fetches the data and processes the markdown", async done => {
    const mockSuccessResponse = "# return text"
    const mockJsonPromise = Promise.resolve(mockSuccessResponse)
    const mockFetchPromise = Promise.resolve({
      text: () => mockJsonPromise
    })
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise)

    let instance
    await act(async () => {
      instance = create(<Content page="home" />)
    })

    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(global.fetch).toHaveBeenCalledWith("/pages/home.md")
    const h1 = instance.root.findByType("h1")
    expect(h1.children[0].props.value).toBe("return text")
    global.fetch.mockClear()
    done()
  })
})
