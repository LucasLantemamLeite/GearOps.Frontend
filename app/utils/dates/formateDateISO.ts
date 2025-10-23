export function formateDateISO(dateIso: string | Date | number | undefined | null, locale: boolean = false): string {
  if (!dateIso) return "";

  const date = new Date(dateIso);

  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");

  const minutes = String(date.getMinutes()).padStart(2, "0");

  return !locale ? `${year}-${month}-${day}T${hours}:${minutes}` : `${day}/${month}/${year} : ${hours}:${minutes}`;
}
