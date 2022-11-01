export const getApiResourse = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("Could not fetch.");
      return null;
    }

    return await response.json();
  } catch (error) {
    console.log("Error 404");
    return null;
  }
};

// (async () => {
//   const body = await getApiResourse(SWAPI_ROOT + SWAPI_POEPLE);
//   console.log(body);
// })();
