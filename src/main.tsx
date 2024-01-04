import ReactDOM from 'react-dom/client'
import {RouterProvider}  from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')!).render(

   <Provider store={store}>
     <RouterProvider router={routes}/>

   </Provider>
)
