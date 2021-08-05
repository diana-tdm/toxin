import React from "react";
import $ from "jquery";
import "air-datepicker/dist/js/datepicker.js";
import "air-datepicker/dist/css/datepicker.css";
import "./style.scss";

class AirDatepicker extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.datepicker({
      dateFormat: "dd.mm.yyyy",
      clearButton: true,
      range: true,
    });
  }

  render() {
    return (
      <div className="datepicker-react">
        <input ref={(el) => (this.el = el)} />
      </div>
    );
  }
}

export default AirDatepicker;
