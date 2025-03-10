export interface User {
  id: number;
  name: string;
  email: string;
}

export const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "jane@example.com" }
];

export function findUserById(userId: number): User | undefined {
  return users.find(user => user.id === userId);
}

const user = findUserById(1);
console.log(user);