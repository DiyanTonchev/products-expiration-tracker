import React, { memo } from 'react'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'

export default memo(props => (
  <React.Fragment>
    <Head>
      <meta charSet='UTF-8' />
      <title>Product Expiration Tracker</title>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
        crossOrigin='anonymous'
      />
    </Head>
    <Container>{props.children}</Container>
  </React.Fragment>
))
