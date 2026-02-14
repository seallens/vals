/**
 * Simple classNames helper for conditional Tailwind classes.
 * @param {...(string | undefined | null | false)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
