export const Loading = ref(false);

export function loadingHide() {
  Loading.value = false;
}

export function loadingShow() {
  Loading.value = true;
}
