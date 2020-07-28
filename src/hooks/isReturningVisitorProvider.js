import React, { useState } from 'react';
import PropTypes from "prop-types"

export const isReturningVisitorContext = React.createContext();

const Provider = props => {
  const [isReturningVisitor, setReturningVisitor] = useState(false);

  return (
    <isReturningVisitorContext.Provider value={{
      isReturningVisitor,
      setReturningVisitor: () => setReturningVisitor(true)
    }}>
      {props.children}
    </isReturningVisitorContext.Provider>
  )
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
