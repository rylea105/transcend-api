import Sidebar_Header from './Sidebar_Header'

const style = {
  position: 'absolute',
  right: 0,
  top: 0,
  left: 0,
  padding: '1rem',
  backgroundColor: '#FFFFFF',
  textAlign: 'right',
  border: '1px solid #707070'
}

const Header = () => (
  <div style={style}>
    <Sidebar_Header />
    User
  </div>
)

export default Header