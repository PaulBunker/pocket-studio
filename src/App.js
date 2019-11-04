import React, { useState, useEffect } from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Menu from "./components/menu/menu"
import Content from "./components/content/content"
import MenuIcon from "./components/menuIcon/menuIcon"
import styles from "./App.module.css"

export const DESKTOP_WIDE_BREAKPOINT = "1000px"

export default () => {
  const mql = window.matchMedia(`(min-width: ${DESKTOP_WIDE_BREAKPOINT})`)
  const [isLargeScreen, setIsLargeScreen] = useState(mql.matches)
  const [isMenuOpen, setIsMenuOpen] = useState(isLargeScreen)
  const [currentPage, setCurrentPage] = useState("")

  useEffect(() => {
    const handler = () => {
      if (isLargeScreen !== mql.matches) {
        setIsLargeScreen(mql.matches)
        setIsMenuOpen(mql.matches)
      }
    }
    mql.addListener(handler)
    return () => mql.removeListener(handler)
  }, [isLargeScreen, mql])

  const closeMenu = () => {
    if (!isLargeScreen) setIsMenuOpen(false)
  }

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles.header}>
          {!isLargeScreen && (
            <MenuIcon
              handleClick={() => {
                setIsMenuOpen(!isMenuOpen)
              }}
              isMenuOpen={isMenuOpen}
            />
          )}
          <Link to="/" className={styles.title}>
            PocketStudio
          </Link>
        </header>
        <main className={styles.main}>
          <Menu
            closeMenu={closeMenu}
            isOpen={isMenuOpen}
            currentPage={currentPage}
          />
          <Route exact path="/">
            <Content closeMenu={closeMenu} />
          </Route>
          <Route
            path="/:page"
            render={({ match }) => {
              console.log(match)
              setCurrentPage(match.url)
              return <Content closeMenu={closeMenu} page={match.url} />
            }}
          />
        </main>
      </div>
    </Router>
  )
}
