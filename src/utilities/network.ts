export const getApiResource = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export const makeConcurrentRequest = async (url: any) => {
  const res = await Promise.all(
    url.map((res: any) => {
      return fetch(res).then((res) => res.json());
    })
  );
  return res;
};
