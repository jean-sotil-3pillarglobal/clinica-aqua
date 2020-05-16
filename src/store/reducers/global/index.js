import {
  SET_DEVICE,
  SET_LEAD_TYPE,
  SET_SECTION,
  SET_LOADING,
} from '../../actions/global';

export const getDeviceReducer = (state = null, action) => {
  switch (action.type) {
  case SET_DEVICE:
    return action.payload;
  default:
    return state;
  }
};

export const getSectionReducer = (state = null, action) => {
  switch (action.type) {
  case SET_SECTION:
    return action.payload || null;
  default:
    return state;
  }
};

export const getLeadTypeReducer = (state = null, action) => {
  switch (action.type) {
  case SET_LEAD_TYPE: {
    const lead = action.payload;
    const { type } = lead;
    return type;
  }
  default:
    return state;
  }
};

export const getLoadingReducer = (state = false, action) => {
  switch (action.type) {
  case SET_LOADING:
    return action.payload;
  default:
    return state;
  }
};

// default
export const defaultReducer = null;
