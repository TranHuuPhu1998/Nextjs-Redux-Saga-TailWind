import { toastError, toastSuccess } from '../common/helpers/toastHelper';
import * as types from '../constants/auth';

const initialState = {
  user:{}
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP: {
      return {
        ...state
      };
    }
    case types.SIGNUP_SUCCESS: {
      toastSuccess('sing up success');
      return {
        ...state
      };
    }
    case types.SIGNUP_FAILED: {
      toastError(action.payload.error);
      return {
        ...state
      };
    }
    case types.LOGIN: {
      return {
        ...state
      };
    }
    case types.LOGIN_SUCCESS: {
      const {data} = action.payload;
        toastSuccess('Login success');
      return {
        ...state,
        user: data
      };
    }
    case types.LOGIN_FAILED: {
        toastError("Email or Password is Wrong");
        return {
            ...state,
        };
    }
    case types.SEND_MAIL : {
        return {
            ...state
        };
    }
    case types.SEND_MAIL_SUCCESS : {
        toastSuccess(action.payload.data);
        return {
            ...state
        };
    }
    case types.SEND_MAIL_FAILED : {
        toastError("Email not found");
        return {
            ...state
        }
    }
    case types.RESET_PASSWORD_SUCCESS : {
        toastSuccess("reset password Success");
        return {
            ...state
        }
    }
    case types.RESET_PASSWORD_FAILED : {
        toastSuccess("reset password Success");
        return {
            ...state
        }
    }
    case types.LOGOUT : {
        return {
          ...state
        }
    }
    case types.LOGOUT_SUCCESS : {
        toastSuccess("logout success");
        return {
          ...state
        }
    }
    case types.LOGOUT_FAILED : {
        toastSuccess("logout Failed");
        return {
          ...state
        }
    }
    default:
      return state;
  }
};

export default reducers;