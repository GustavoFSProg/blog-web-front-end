import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './Login'
import Register from './Register'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes