export function getFirstAndLastName(fullname: string) {
  const names = fullname.trim().split(/\s+/);

  const firstName = names[0];
  const lastName = names.length > 1 ? names.pop() : "";

  return firstName + (lastName ? ` ${lastName}` : "");
}
