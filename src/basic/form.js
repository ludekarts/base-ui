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
  const { children, onSubmit, includeCheckValues, ...restProps } = props;
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit &&
        onSubmit(formInputsToObject(event.target, { includeCheckValues }), event.target);
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
  includeCheckValues: PropTypes.bool,
};

Form.defaultProps = {
  // If set to TRUE all checkboxes will report their values along with checked status.
  includeCheckValues: false,
};


Form.formInputsToObject = formInputsToObject;
Form.hardFormReset = hardFormReset;
Form.formUpdate = formUpdate;

export default Form;


// ---- Helpers ----------------

/*
  [⚠️ NOTICE]:
  In case of checkboxes the value is replaced with "checked" state since in most cases this is what you want
  from toggle switch rather than the value that is not changing.

*/

export function formInputsToObject(form, options = { includeCheckValues: false }) {
  return Array.from(form.elements).reduce(
    (acc, element) => {
      if (element.name) {
        if (element.type === "radio") {
          if (element.checked) {
            acc[element.name] = element.value;
          }
        }
        else if (element.type === "checkbox") {
          if (options.includeCheckValues) {
            acc[element.name] = {
              value: element.value,
              checked: element.checked,
            };
          } else {
            acc[element.name] = element.checked;
          }
        }
        else {
          acc[element.name] = element.value;
        }
      }
      return acc;
    }, {});
}

/*
  [⚠️ NOTICE]:
  This is an imperative way to update a form. When providing a @source object all form's inputs that names matches 
  fields in @source will be translated into the inputs "value".
  
  [💡 HINT]:
  If you wnant to update other properties on the input e.g. "checked" field then use object notation 
  instead a plain value like so:

  formUpdate("#form", {
    name: "Rex",
    active: { 
      checked: true, 
      value: "🦖" 
    }
  });

  [💡 HINT]:
  If you want to update a multiple radio buttons with same name then just treatthem as a one files input
  and set the velue normally e.g.:

  <form id="form">
    <input type="radio" name="mood" value="bad">
    <input type="radio" name="mood" value="neutral" checked>
    <input type="radio" name="mood" value="good">
  </form>

  . . .

  formUpdate("#form", {
    mood: {
      value: "good",
      checked: true,
    }
  });

*/

export function formUpdate(selector, source) {
  const form = selector instanceof HTMLElement ? selector : document.querySelector(selector);
  Array.from(form.elements).forEach(element => {
    const value = source[element.name];
    if (value !== undefined) {
      if (isSimpleValue(value)) {
        element.value = value;
      }
      else {
        Object.keys(value).forEach(key => element[key] = value[key]);
      }
    }
  });
}

function isSimpleValue(value) {
  return value === null
    || typeof value === "string"
    || typeof value === "boolean"
    || typeof value === "number";
}


function hardFormReset(form, options = { resetValue: false }) {
  Object.values(form.elements).forEach(input =>
    input.type === "checkbox" && (input.checked = options.resetValue)
  );
}