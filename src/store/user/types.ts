export const roles = ['student', 'teacher', 'admin'];
export const genders = ['male', 'female', 'other', 'unknown'];
type Role = (typeof roles)[number];
type Gender = (typeof genders)[number];

export const defaultUser = {
  id: '',
  username: '',
  email: '',
  fullName: '',
  profilePic: '',
  gender: 'unknown',
  role: 'student',
};
export type User = typeof defaultUser & {
  role: Role;
  gender: Gender;
};

export type UserStore = {
  user: User;
  userUpdate: (u: Partial<User>) => void;
  logout: () => void;
};
