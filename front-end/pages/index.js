import React, { useState, useEffect } from 'react'
import 'isomorphic-unfetch'
import { Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import ProducTable from '../components/ProductsTable'
import AddProductForm from '../components/AddProductForm'

export default () => {
  const [products, setProducts] = useState()

  const getAllProducts = async () => {
    const res = await fetch('http://localhost:1001/products')
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <Layout>
      <h1 className='text-center mt-4'>Hello, is something already expired, mmm? Let's see!</h1>
      {products && (
        <Row className='justify-content-md-center'>
          <Col xs='10'>
            <ProducTable products={products} />
          </Col>
        </Row>
      )}
      <Row className='justify-content-md-center'>
        <Col xs='6'>
          <AddProductForm refreshProducts={getAllProducts} />
        </Col>
      </Row>
    </Layout>
  )
}
