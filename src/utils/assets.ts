export const getImageUrl = (filename: string): string => {
  return `${import.meta.env.BASE_URL}${filename}`;
};