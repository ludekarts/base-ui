import React, { useCallback, forwardRef } from "react";
import PropTypes from "prop-types";

// USAGE:
/* 
  const handleSubmit = data => {
    // data: object with all input fields name and their values => { inputName: inputValue }.
  };

  <Form onSubmit={handleSubmit}>...</Form>
*/

const Form = forwardRef((props, ref) => {
  const { children, onSubmit, includeCheckStatus, ...restProps } = props;
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit &&
        onSubmit(formInputsToObject(event.target, { includeCheckStatus }), event.target);
    },
    [onSubmit],
  );

  return (
    <form {...restProps} ref={ref} onSubmit={handleSubmit}>{children}</form>
  );
})

Form.displayName = "Form";

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  includeCheckStatus: PropTypes.bool,
};

Form.defaultProps = {
  // If set to TRUE all checkboxes will report their check-status.
  includeCheckStatus: false,
};


Form.formInputsToObject = formInputsToObject;
Form.hardFormReset = hardFormReset;

export default Form;


// ---- Helpers ----------------

function formInputsToObject(form, options = { includeCheckStatus: false }) {
  return Array.from(form.elements).reduce(
    (acc, element) => {
      if (element.name) {
        if (element.type === "radio") {
          if (element.checked) {
            acc[element.name] = element.value;
          }
        }
        else if (element.type === "checkbox") {
          if (options.includeCheckStatus) {
            acc[element.name] = {
              value: element.value,
              checked: element.checked,
            };
          } else if (element.checked) {
            acc[element.name] = element.value;
          }
        }
        else {
          acc[element.name] = element.value;
        }
      }
      return acc;
    }, {});
}

function hardFormReset(form, options = { resetValue: false }) {
  Object.values(form.elements).forEach(input =>
    input.type === "checkbox" && (input.checked = options.resetValue)
  );
}