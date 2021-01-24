import React, { useState, memo, useRef } from 'react'
import 'isomorphic-unfetch'
import { useForm } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'

export default memo(({ refreshProducts }) => {
  const [productName, setProductName] = useState()
  const [manufacturer, setManufacturer] = useState()
  const [expirationDate, setExpirationDate] = useState()

  const form = useRef()

  const { register, handleSubmit, errors } = useForm()

  const onNameChange = e => {
    setProductName(e.target.value)
  }

  const onManufacturerChange = e => {
    setManufacturer(e.target.value)
  }

  const onDateChange = e => {
    setExpirationDate(new Date(e.target.value))
  }

  const onSubmit = async () => {
    await fetch('http://localhost:1001/product/register', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: productName,
        manufacturer,
        expirationDate,
      }),
    })

    await refreshProducts()

    form.current.reset()
    setProductName(null)
    setManufacturer(null)
    setExpirationDate(null)
  }

  return (
    <Form
      ref={form}
      noValidate
      validated={Object.entries(errors).length}
      onSubmit={handleSubmit(onSubmit)}
      className='mb-4'
    >
      <Form.Group controlId='formProductName'>
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type='text'
          name='name'
          ref={register({ required: true })}
          onChange={onNameChange}
          required
          placeholder='Enter a product name'
        />
        {errors.name && (
          <Form.Control.Feedback type='invalid'>Please enter a product name</Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId='formProductManufacturer'>
        <Form.Label>Product Manufacturer</Form.Label>
        <Form.Control
          type='text'
          name='manufacturer'
          ref={register({ required: true })}
          onChange={onManufacturerChange}
          required
          placeholder='Enter a manufacturer'
        />
        {errors.manufacturer && (
          <Form.Control.Feedback type='invalid'>Please enter a manufacturer</Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId='formExpirationDate'>
        <Form.Label>Expiration Date</Form.Label>
        <Form.Control
          type='date'
          name='expirationDate'
          ref={register({ required: true })}
          required
          onChange={onDateChange}
        />
        {errors.expirationDate && (
          <Form.Control.Feedback type='invalid'>
            Please choose an expiration date
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Button variant='primary' id='submit-product-btn' type='submit'>
        Submit
      </Button>
    </Form>
  )
})
