const fetchData = async (dataType) => {
    try {
      const response = await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${dataType}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(`error`, error);
    }
  };
  export { fetchData };