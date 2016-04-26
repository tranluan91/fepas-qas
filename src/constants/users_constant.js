export default {
  // Actions
  PROFILE_GET: 'GET@@/profile',
  PROFILE_UPDATE: 'PATCH@@/profile',
  // State
  PROFILE_DATA_LOADING: 'PROFILE_DATA_LOADING',
  PROFILE_DATA_LOAD_SUCCESS: 'load success',
  PROFILE_DATA_LOAD_FAILED: 'load failed',
  PROFILE_EDITTING: 'PROFILE_EDITTING',
  PROFILE_DATA_SUBMITTING: 'PROFILE_DATA_SUBMITTING',
  PROFILE_DATA_UPDATED: 'PROFILE_UPDATED',
  PROFILE_AWAITING_UPDATE_RESPONSE: 'PROFILE_AWAITING_UPDATE_RESPONSE',
  // Status
  PROFILE_RESPONSE_SUCCESS: '@@/profile:CODE2XX',
  PROFILE_RESPONSE_FAILURE: '@@/profile:CODE4XX',
};
