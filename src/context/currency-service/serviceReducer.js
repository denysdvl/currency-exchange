const handlers = {
  DEFAULT: (state) => state,
};

export const serviceReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
