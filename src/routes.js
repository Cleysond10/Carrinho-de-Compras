import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UsusarioProvider } from 'common/context/Ususario'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsusarioProvider>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/feira'>
            <Feira />
          </Route>
        </UsusarioProvider>
        <Route path='/carrinho'>
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Router;