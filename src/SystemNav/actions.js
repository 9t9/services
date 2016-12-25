/*
 * action types
 */

export const OPEN_SYSTEM_NAV = 'OPEN_SYSTEM_NAV';
export const CLOSE_SYSTEM_NAV = 'CLOSE_SYSTEM_NAV';
export const TOGGLE_SYSTEM_NAV = 'TOGGLE_SYSTEM_NAV';

export const DOCK_SYSTEM_NAV = 'DOCK_SYSTEM_NAV';
export const UNDOCK_SYSTEM_NAV = 'UNDOCK_SYSTEM_NAV';

/*
 * action creators
 */

export function openSystemNav() {
  return { type: OPEN_SYSTEM_NAV };
}

export function closeSystemNav() {
  return { type: CLOSE_SYSTEM_NAV };
}

export function toggleSystemNav() {
  return { type: TOGGLE_SYSTEM_NAV };
}

export function dockSystemNav() {
  return { type: DOCK_SYSTEM_NAV };
}

export function undockSystemNav() {
  return { type: UNDOCK_SYSTEM_NAV };
}
