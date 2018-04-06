import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const p = {
  paddingLeft: 180,
  paddingTop: 15
}

const Index = (props) => (
  <Layout>
      <p style={p}>Project List</p>
  </Layout>
)

/*Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}*/

export default Index