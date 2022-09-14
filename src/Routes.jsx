import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './Auth/AuthProvider'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'

function Routes() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default Routes
