const seededRandom = (seed) => {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return () => {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const submitAPI = (formData) => {
  return true;
};

export { seededRandom, fetchAPI, submitAPI };
