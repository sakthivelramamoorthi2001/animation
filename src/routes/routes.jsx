
//imports

import {useRoutes} from 'react-router-dom'

//pages
import Layout from '../pages/layout/index'
import Home from '../pages/Home'
import P1 from '../pages/P1/index.jsx'

const route = [
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/p1',
                element:<P1 />
            },
        ]
    },

   
]

const App = () => {
    return useRoutes(route);
}

export default App;