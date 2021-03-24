import { SET_PAGE_TITLE } from './actionsTypes';

export const setPageTitle = (title) => ({
  type: SET_PAGE_TITLE,
  payload: {
    title,
  },
});