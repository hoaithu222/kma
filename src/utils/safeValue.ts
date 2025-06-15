export const safeValue = <T>(value: T | undefined | null, fallback: T): T => {
  if (value === undefined || value === null) {
    return fallback;
  }
  return value;
};

export const safeImage = (
  src: string | undefined | null,
  fallbackSrc: string
): string => {
  if (!src) {
    return fallbackSrc;
  }
  return src;
};

export const safeTranslation = (
  key: string | undefined | null,
  fallback: string
): string => {
  if (!key) {
    return fallback;
  }
  return key;
};
