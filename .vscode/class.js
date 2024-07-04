let count = 30;
const abc = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    clearInterval(abc);
  }
}, 1000);