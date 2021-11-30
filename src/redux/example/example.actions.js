import { ExampleActionTypes } from "./example.types";

export const addItem = item => ({
    type: ExampleActionTypes.EXAMPLE_ADD_ITEM,
    payload: item
})





/*  ----  Example of CHANGING stored data  ----
  import { connect } from "react-redux";
  import { addItem} from "../../redux/example/example.actions";

  const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item)),
  })

  export default connect(null, mapDispatchToProps)(SomeComponent);
*/



/*  ----  Example of RETRIEVING stored data  ----
  import { connect } from "react-redux";
  import { createStructuredSelector } from "reselect";

  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
  })

  export default connect(null, mapDispatchToProps)(SomeComponent);
*/