import {Button} from '@nextui-org/react'
import type { NextPage } from 'next'
import {Layout} from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout title='Pokemon List'>
      <h1>Hola</h1>
      <Button color={'gradient'}>
        Hola
      </Button>
    </Layout>
  )
}

export default Home
