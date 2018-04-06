import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import fetch from 'isomorphic-unfetch'


const layoutStyle = {
  margin: 20,
  padding: 20,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Sidebar />

    {props.children}

    <Footer />
  </div>
)

export default Layout
