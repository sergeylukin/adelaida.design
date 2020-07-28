/* eslint-disable */
const React = require("react")

const ReturningVisitorProvider = require('./src/hooks/isReturningVisitorProvider').default

exports.wrapPageElement = ({ element, props }) => {
  return <ReturningVisitorProvider {...props}>{element}</ReturningVisitorProvider>
}
