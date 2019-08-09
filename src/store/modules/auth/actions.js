export function signInSucess(nome) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { nome },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
