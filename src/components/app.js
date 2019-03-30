import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Navbar from './navbar/navbar'
import Expenses from '../containers/expenses'

const App = () =>
  (
    <ThemeProvider theme={theme} >
      <div>
        <Navbar />
        <Expenses />
      </div>
    </ThemeProvider>
  )

export default App