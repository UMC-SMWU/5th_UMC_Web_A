export const setId = (id) => ({
  type: "CHANGE_ID",
  payload: id,
});

export const setPw = (pw) => ({
  type: "CHANGE_PW",
  payload: pw,
});

export const isLoading = (loading) => ({
  type: "IS_LOADING",
  payload: loading,
});

export const isToken = (token) => ({
  type: "ACCESS_TOKEN",
  payload: token,
});
