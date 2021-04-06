const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'The email cannot be left blank';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if(!values.name) {
      errors.name = "The name cannot be left blank";
    } else if(values.name.trim().length < 6){
      errors.name = "The name must not be 6 characters or more";
    }

    if (!values.password) {
      errors.password = 'The password cannot be left blank';
    } else if (values.password.trim().length < 6) {
      errors.password = 'The password must not be 6 characters or more';
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = 'The confirm password cannot be left blank';
    } else if (values.confirmpassword.trim().length < 6) {
      errors.confirmpassword = 'The confirm password not be 6 characters or more';
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = 'The password does not match';
    } 
    if(!values.position) {
      errors.position = "The position cannot be left blank";
    } else if(parseInt(values.position) === 'NaN') {
      errors.position = "Position is not a number";
    }

    if(!values.permission){
      errors.permission = "The permission cannot be left blank";
    } else if(parseInt(values.permission) === 'NaN'){
      errors.permission = "permission is not a number"
    }

    if (!values.isAccept) {
      errors.isAccept = 'Obligatory';
    }
    return errors;
  };
  
  export default validate;