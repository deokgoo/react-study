import { UserManager } from 'oidc-client';

export default function createUserManager(config) {
  const userManager = new UserManager(config);
  return userManager;
}