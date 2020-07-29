import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const orderInfo = (props) => {
  return (
    <div style={{ width: "100%", paddingBottom: 20 }}>
      <Autocomplete
        options={props.customers}
        getOptionLabel={(option) => option.name}
        getOptionSelected={(option, value) => option._id === value._id}
        value={props.customer}
        onChange={(e, newValue) => props.changeCustomer(newValue)}
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            style={{ width: "100%" }}
            label="Cliente"
            margin="dense"
          />
        )}
      />
      <TextField
        fullWidth
        style={{ marginTop: 10 }}
        label="Direccion"
        value={props.address}
        onChange={(e) => props.changeAddress(e.target.value)}
      />
      <TextField
        fullWidth
        style={{ marginTop: 10 }}
        label="Descripción"
        value={props.description}
        onChange={(e) => props.changeDescription(e.target.value)}
      />
    </div>
  );
};

export default orderInfo;
