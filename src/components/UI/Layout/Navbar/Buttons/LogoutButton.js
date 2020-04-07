import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

const logoutButton = props => (
  <MenuItem onClick={() => props.session.logout()}>Cerrar Sesión</MenuItem>
);

const mapStateToProps = state => ({
  session: state.keycloak.kc
});

export default connect(mapStateToProps)(logoutButton);
