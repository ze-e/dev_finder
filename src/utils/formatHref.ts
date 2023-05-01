export default function formatHref(domain: string, userName?: string, allowAt = false): string {
  if (userName) return !allowAt && userName?.startsWith('@') ? `https://${domain}/${userName.split('@')[1]}` : `https://${domain}/${userName}`;
  return `https://${domain}`;
}
