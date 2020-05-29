import React from "react"

const GraphQlErrorList = ({ errors }) => {
  ;<div>
    <h1>GraphQl Error</h1>
    {errors.map(error => {
      ;<pre key={error.message}>{error.message}</pre>
    })}
  </div>
}

export default GraphQlErrorList
