export const randomColor = () => {
  const range = 200;
  const randomHexadecimalArr = ["#"];
  for (let i = 0; i < 3; i++) {
    randomHexadecimalArr.push(
      Math.floor(Math.random() * range)
        .toString(16)
        .toUpperCase()
    );
  }
  // let randomHexadecimal = Math.floor(Math.random() * 256)
  //   .toString(16)
  //   .toUpperCase();

  return randomHexadecimalArr.join("");
};
