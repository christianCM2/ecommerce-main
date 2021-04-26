import { PersistGate } from 'redux-persist/integration/react';
import LoginPage from './pages/Login/index'
import store from "./config/store";
import {Provider} from 'react-redux';
import { AppRouter } from './components/routers/AppRouter'
import { persistStore} from 'redux-persist'

let persistor = persistStore(store);
function App() {

  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
     <AppRouter />
     </PersistGate>
    </Provider>
  );
}
export default App;