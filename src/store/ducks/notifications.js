const defaultState = {
  notifications: []
};

export const enqueueMessage = message => enqueueSnackbar({ message });

export const enqueueError = message =>
  enqueueSnackbar({ message, options: { variant: 'error' } });

export const enqueueSnackbar = notification => ({
  type: 'ENQUEUE_SNACKBAR',
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification
  }
});

export const removeSnackbar = key => ({
  type: 'REMOVE_SNACKBAR',
  key
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ENQUEUE_SNACKBAR':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            ...action.notification
          }
        ]
      };

    case 'REMOVE_SNACKBAR':
      return {
        ...state,
        notifications: state.notifications.filter(
          notification => notification.key !== action.key
        )
      };

    default:
      return state;
  }
};
