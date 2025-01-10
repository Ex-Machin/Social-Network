import { useLocation, useNavigate, useParams } from "react-router-dom";

// WCP - Wrapped Component Props

export function withRouter<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const ComponentWithRouterProp = (props: WCP) => {
    return <WrappedComponent {...props} location={useLocation()} navigate={useNavigate()} params={useParams()}/>
  }

  return ComponentWithRouterProp;
}
