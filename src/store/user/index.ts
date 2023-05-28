import {create} from 'zustand';
import {defaultUser, UserStore} from './types';

export const useUser = create<UserStore>(set => ({
  user: defaultUser,
  userUpdate(u) {
    set(state => {
      Object.keys(u).forEach(key => {
        // @ts-ignore
        if (u[key]) {
          // @ts-ignore
          state.user[key] = u[key];
        }
      });
      return state;
    });
  },
  logout() {
    set(state => {
      state.user = defaultUser;
      return state;
    });
  },
}));
