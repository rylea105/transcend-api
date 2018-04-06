import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const p = {
    paddingLeft: 180,
    paddingTop: 15
}

export default () => (
    <Layout>
        <p style={p}>Full Stack</p>
    </Layout>
)
