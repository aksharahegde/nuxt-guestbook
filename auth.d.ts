declare module "#auth-utils" {
  type User = {
    id: string;
    name: string;
    email: string;
    role: string;
    isActiver: boolean;
  };
  interface UserSession {
    user: User;
  }
}
