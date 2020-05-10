import {combineReducers} from 'redux';

const initialState = {
  name: 'Toni',
};

const initialStateRegister = {
  form: {
    username: '',
    email: '',
  },
};
const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const initialStateLogin = {
  info: 'Tolong masukan pasword anda',
  isLogin: true,
};
const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});
export default reducer;
