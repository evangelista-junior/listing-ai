export function formatDateTimeISO(date: string | number | Date) {
  const d =
    typeof date === "string" || typeof date === "number"
      ? new Date(date)
      : date;

  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mi = String(d.getUTCMinutes()).padStart(2, "0");
  const ss = String(d.getUTCSeconds()).padStart(2, "0");

  return `${dd}/${mm}/${yyyy} - ${hh}:${mi}:${ss}`;
}
