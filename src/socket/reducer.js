const initialState = {
  isConnected: false,
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'CONNECTED':
      return {
        ...state,
        isConnected: action.isConnected
      };

    case 'DISCONNECTED':
      return {
        ...state,
        isConnected: action.isConnected
      };

    default:
      return state;
  }
};

export default socketReducer;
