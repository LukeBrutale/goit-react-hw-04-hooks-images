const KEY = "23113693-a6d7ef0307e3a7805769671eb";
const URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const AMOUNT_IMAGES = 12;

function ImageApiService(query, page) {
  const url = `${URL}&q=${query}&page=${page}&per_page=${AMOUNT_IMAGES}&key=${KEY}`;
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Нет картинок с запросом ${query}`));
  });
}

export default ImageApiService;