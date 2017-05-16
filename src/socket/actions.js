export const socketConnected = () => {
  const isConnected = true;
  return {
    type: 'CONNECTED',
    isConnected,
  };
};

export const socketDisconnected = () => {
  const isConnected = false;
  return {
    type: 'DISCONNECTED',
    isConnected,
  };
};
