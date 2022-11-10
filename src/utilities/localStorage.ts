export const getLocalStorage = (key: any) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return JSON.parse(data);
  }

  return {};
};

export const setLocalStorage = (key: any, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
