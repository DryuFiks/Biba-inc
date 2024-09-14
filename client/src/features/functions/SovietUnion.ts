

export function searchParams(filters: Record<string , any>) {
  const params = new URLSearchParams(
    Object.entries(filters).flatMap(([key, value]) => 
      Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]])
  ).toString();
  return params;
}