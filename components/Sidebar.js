import Link from 'next/link'

const div = {
  width: 200,
  height: '90%',
  display: 'block',
  position: 'absolute',
  left: 0,
  top: 51,
  backgroundColor: '#1678C4'
}

const ul = {
  margin: 0,
  padding : 0
}

const li = {
  listStyleType: 'none',
}

const linkStyle = {
  display: 'block',
  textAlign: 'Center',
  paddingTop: 20,
  paddingBottom: 20,
  fontColor: '#FFFFFF'
}

const Sidebar = () => (
    <div style={div}>
      <ul style={ul}>
        <li style={li}><Link href="/">
          <a style={linkStyle}>Project List</a>
        </Link></li>        
        <li style={li}><Link href="/FullStack">
          <a style={linkStyle}>Full-Stack</a>
        </Link></li> 
        <li style={li}><Link href="/Job">
          <a style={linkStyle}>Job</a>
        </Link></li> 
      </ul>
    </div>
)

export default Sidebar