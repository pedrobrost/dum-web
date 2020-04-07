import React from "react";
import List from "@material-ui/core/List";
import ProductsIcon from "@material-ui/icons/Cake";
import CustomersIcon from "@material-ui/icons/People";
import OrdersIcon from "@material-ui/icons/EventNote";

import DrawerButton from "./DrawerButton";

const drawerButtons = ({ onClose, roles }) => (
  <List>
    <div>
      <DrawerButton
        name="Productos"
        path="/productos"
        icon={<ProductsIcon />}
        onClose={onClose}
      />
    </div>
    <div>
      <DrawerButton
        name="Clientes"
        path="/clientes"
        icon={<CustomersIcon />}
        onClose={onClose}
      />
    </div>
    <div>
      <DrawerButton
        name="Pedidos"
        path="/pedidos"
        icon={<OrdersIcon />}
        onClose={onClose}
      />
    </div>
  </List>
);

export default drawerButtons;
