export const fetchCall = (url) => {
  const data = fetch(url)
    .then((res) => res.json())
    .then((result) => result);
  return data;
};
