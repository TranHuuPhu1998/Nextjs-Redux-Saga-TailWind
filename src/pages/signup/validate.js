const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email không được bỏ trống';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email không hợp lệ';
    }

    if(!values.name) {
      errors.name = "Name không được bỏ trống";
    } else if(values.name.trim().length < 6){
      errors.name = "Name không phải từ 6 ký tự trở lên";
    }

    if (!values.password) {
      errors.password = 'Mật khẩu không được bỏ trống';
    } else if (values.password.trim().length < 6) {
      errors.password = 'Mật khẩu phải từ 6 ký tự trở lên';
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = 'Mật khẩu không được bỏ trống';
    } else if (values.confirmpassword.trim().length < 6) {
      errors.confirmpassword = 'Mật khẩu phải từ 6 ký tự trở lên';
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = 'Mật khẩu không trùng khớp';
    }
    
    if(!values.position) {
      errors.position = "Position không được bỏ trống";
    } else if(typeof values.position !== 'number') {
      errors.position = "Position phải là số";
    }

    if(!values.permission){
      errors.permission = "Permission không được bỏ trống";
    } else if(typeof values.permission !== 'number'){
      errors.permission = "permission phải là số"
    }

    if (!values.isAccept) {
      errors.isAccept = 'Bắt buộc';
    }
    return errors;
  };
  
  export default validate;