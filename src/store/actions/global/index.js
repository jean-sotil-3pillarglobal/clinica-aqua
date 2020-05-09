export const SET_DEVICE = 'SET_DEVICE';
export const SET_LEAD_TYPE = 'SET_LEAD_TYPE';
export const SET_SECTION = 'SET_SECTION';

export const setDeviceAction = (string) => {
  return {
    payload: string,
    type: SET_DEVICE,
  };
};

export const setSectionAction = (string) => {
  return {
    payload: string,
    type: SET_SECTION,
  };
};
