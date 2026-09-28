export function truncateMetaDescription(value: string): string {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "HiveRift builds conversion-focused websites and digital systems for modern businesses.";
  }

  if (normalized.length <= 140) {
    return normalized;
  }

  return `${normalized.slice(0, 137).trimEnd()}...`;
}

export function buildKeywordTitle(primaryKeyword: string, location?: string): string {
  const cleanKeyword = primaryKeyword.replace(/\s+/g, " ").trim();
  const cleanLocation = location ? ` in ${location}` : "";
  return `${cleanKeyword}${cleanLocation} | HiveRift`;
}
