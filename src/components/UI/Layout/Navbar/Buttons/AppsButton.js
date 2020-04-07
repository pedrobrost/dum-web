import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';

const appsButton = () => (
  <MenuItem
    component={ButtonBase}
    href="https://servicios.gralsaneamiento.com.ar"
  >
    Mis aplicaciones
  </MenuItem>
);

export default appsButton;
