import { connect } from "react-redux";

import ConfirmButton from "./confirmButtonContainer/ConfirmButton";
import { confirm } from "../../../store/ducks/newOrder";

const mapDispatchToProps = (dispatch) => ({
  confirm: () => dispatch(confirm()),
});

export default connect(null, mapDispatchToProps)(ConfirmButton);
