export function safe(run, defaultValue) {
  try {
    const result = run();
    return typeof result === 'undefined' ? defaultValue : result;
  } catch {
    return defaultValue;
  }
}
