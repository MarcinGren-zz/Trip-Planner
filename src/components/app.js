import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import theme from './theme'
import Navbar from './navbar/navbar'
import ExpensesContainer from '../containers/expenses-container'
import PlacesContainer from '../containers/places-container'

const App = () =>
  (
    <ThemeProvider theme={theme} >
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/expenses' component={ExpensesContainer} />
            <Route path='/places' component={PlacesContainer} />
            {/* <Route path='/'  */}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )

export default App