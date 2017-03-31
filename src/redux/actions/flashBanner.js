export const showFlashBanner = () => {
  const show = true;
  return {
    type: 'SHOW_FLASH_BANNER',
    show,
  };
};

export const hideFlashBanner = () => {
  const show = false;
  return {
    type: 'HIDE_FLASH_BANNER',
    show,
  };
};
