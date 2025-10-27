export const Pages = reactive({
  Count: 0,
  Current: 1,
  Take: setTakeByScreenSize(),
});

function setTakeByScreenSize() {
  const width = window.innerWidth;

  if (width <= 600) {
    return 15;
  } else if (width <= 1024) {
    return 20;
  } else {
    return 30;
  }
}
