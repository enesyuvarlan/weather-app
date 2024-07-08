import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

export function PrivateRoute({children}) {

  const api = useSelector((state) => state.api.api)
  if (!api) {
    return <Navigate to="/set-api-key"/>
  }
  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
