import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UsusarioProvider } from 'common/context/Ususario';
import { CarrinhoProvider } from 'common/context/Carrinho';
import { PagamentoProvider } from 'common/context/Pagamento';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsusarioProvider>
          <Route exact path='/'>
            <Login />
          </Route>
          <CarrinhoProvider>
            <Route path='/feira'>
              <Feira />
            </Route>
            <PagamentoProvider>
              <Route path='/carrinho'>
                <Carrinho />
              </Route>
            </PagamentoProvider>
          </CarrinhoProvider>
        </UsusarioProvider>
      </Switch>
    </BrowserRouter>
  )
}
export default Router;