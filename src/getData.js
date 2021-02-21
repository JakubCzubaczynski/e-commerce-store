const getData = async () => {
  const data = await fetch('./furniture.json').catch((err) => console.log(err));

  if (data) {
    return data.json();
  }
};
export default getData;
