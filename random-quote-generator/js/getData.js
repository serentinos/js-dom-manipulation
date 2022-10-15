export const getData = async () => {
  try {
    const response = await (
      await fetch("https://api.quotable.io/random")
    ).json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
