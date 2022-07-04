export const USER_STORAGE_KEY = 'user';

const userStorage = {
  get() {
    const user = localStorage.getItem(USER_STORAGE_KEY);
    try {
      if (!user) return null;
      const parsedUser = JSON.parse(user);
      return parsedUser;
    } catch (e) {
      localStorage.removeItem(USER_STORAGE_KEY);
      return null;
    }
  },
  set(user) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  },
  remove() {
    localStorage.removeItem(USER_STORAGE_KEY);
  },
};

export default userStorage;
