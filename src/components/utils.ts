export function doOnce(key: string) {
  const done = sessionStorage.getItem(key) === 'true';
  if (!done) sessionStorage.setItem(key, 'true');
  return !done;
}
