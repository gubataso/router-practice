import Dashboard from '../component/pages/Dashboard'
import Layout from "../component/layouts/Layout"
import App from '../App'
import Menus from '../component/pages/Menus'

const authRouter = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/tables',
            element: <div>Tables</div>
        },
        {
            path: '/menus',
            element: <Menus />
        },
    ]
}

export default authRouter