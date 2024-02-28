// pages/admin.js

const AdminPage = () => null

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://bharghav-dev-admin.netlify.app/admin' })
  res.end()

  return {
    props: {},
  }
}

export default AdminPage
