/* eslint-disable import/prefer-default-export */
export const request = async (url, method) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const options = {
      headers,
      method,
    };

    const result = await fetch(url, options).then(((res) => res.json()));

    return result;
  } catch (error) {
    return console.log('ERROR MESSAGE: ', error.message);
  }
};
