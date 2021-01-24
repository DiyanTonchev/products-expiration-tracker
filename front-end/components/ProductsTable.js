import React, { memo } from 'react'
import moment from 'moment'
import Table from 'react-bootstrap/Table'

export default memo(({ products }) => (
  <Table responsive striped bordered hover variant='dark' className='mt-4 mb-4'>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Manufacturer</th>
        <th>Expiration Date</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map(product => {
          const isExpired = new Date() > moment(product.expirationDate)
          return (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.manufacturer}</td>
              <td className={isExpired ? 'text-danger' : ''}>{moment(product.expirationDate).format('MMM Do YY')}</td>
            </tr>
          )
        })
      }
    </tbody>
  </Table>
)
)