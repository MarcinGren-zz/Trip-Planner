import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import theme from './theme'
import Navbar from './navbar/navbar'
import Expenses from '../containers/expenses'

const App = () =>
  (
    <ThemeProvider theme={theme} >
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/expenses' render={() => <Expenses />} />
            {/* <Route path='/'  */}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )

export default App