import axios from 'axios';

function setEmissionDataInStorage(emissionsData = {}) {
  // DEV TESTING CLEAR ALL
  // chrome.storage.local.clear();
  // console.log('all deleted');
  // return;

  // set new data
  chrome.storage.local.set({ [emissionsData.id]: emissionsData });
  // get all storage data
  chrome.storage.local.get(null, function (items) {
    console.log({ items });
  });
}

export function getWebsiteCarbonData(url = window.location.hostname) {
  // const corsAnywhereHost = 'http://cors-anywhere.herokuapp.com';
  const carbonAPI = 'https://api.websitecarbon.com/site';
  const endpoint = `${carbonAPI}?url=${url}`;

  console.log({ endpoint });

  axios
    .get(endpoint, {})
    .then((response) => {
      console.log({ response: response.data });
      setEmissionDataInStorage(response.data);
      return response.data;
    })
    .catch((e) => {
      console.log({ errorFetching: e });
    });

  return undefined;
}
