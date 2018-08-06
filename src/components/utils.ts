export function doOnce(key: string) {
  const done = sessionStorage.getItem(key) === 'true';
  if (!done) sessionStorage.setItem(key, 'true');
  return !done;
}

export function formatAddress(address: any) {
  let parts = [];
  if (address.name &&
      address.name != address.city)
    parts.push(address.name);
  if (address.street) {
    let part = address.street;
    if (address.housenumber) part = address.housenumber + ' ' + part;
    parts.push(part);
  }
  if (address.city) parts.push(address.city);
  if (!parts.length && address.county) parts.push(address.county);
  if (parts.length) return parts.join(', ');
  return address.display;
}
