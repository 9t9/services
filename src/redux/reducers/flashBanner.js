const initialState = {
  show: false,
};

const flashBannerReducers = (state = initialState, action) => {
  switch (action.type) {

    case 'SHOW_FLASH_BANNER':
      return {
        ...state,
        show: action.show
      };

    case 'HIDE_FLASH_BANNER':
      return {
        ...state,
        show: action.show
      };

    default:
      return state;
  }
};

export default flashBannerReducers;
