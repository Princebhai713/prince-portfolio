export function isUnauthorizedError(error: Error): boolean {
  return /^401: .*Unauthorized/.test(error.message);
}

export function redirectToLogin() {
  window.location.href = "/admin";
}

export function handleUnauthorizedError(error: Error) {
  if (isUnauthorizedError(error)) {
    redirectToLogin();
    return true;
  }
  return false;
}
