import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AlertComponent } from "../styled/AlartComponent";

const Alert = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertComponent
        className="container"
        alertType={alert.alertType}
        key={alert.id}
      >
        {alert.msg}
      </AlertComponent>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
