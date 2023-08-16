import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Integration Facilitator</title>
          <meta
            property="og:title"
            content="test-page - Future Integration Facilitator"
          />
        </Head>
        <DataProvider
          fetchData={(params) =>
            fetch(
              `/api/test-page-resource-test-page?${new URLSearchParams(
                params
              )}`,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            )
              .then((res) => res.json())
              .then((data) => data.data?.[0])
          }
          renderSuccess={(context_9unnt) => (
            <>
              <h1>{context_9unnt?.name}</h1>
            </>
          )}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage
