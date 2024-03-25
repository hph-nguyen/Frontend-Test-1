import http from "./httpRequest";

export const getCurrentCityWeather = async (latitude, longitude) => {
  try {
    const response = await http.get("current.json", {
      params: {
        q: `${latitude},${longitude}`,
        lang: "de",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getSelectedCityWeather = async (location) => {
  try {
    const response = await http.get("current.json", {
      params: {
        q: `${location}`,
        lang: "de",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
