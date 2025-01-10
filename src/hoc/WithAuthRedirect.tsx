import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";

// WCP - Wrapped Component Props

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
} as MapPropsType);

type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {}

export function WithAuthRedirect<WCP extends JSX.IntrinsicElements>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let {isAuth, ...restProps} = props
    
    if (!isAuth) return <Navigate to="/login" />;

    return <WrappedComponent {...restProps as unknown as WCP} />;
  }
  const ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
