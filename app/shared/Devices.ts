import type { Device } from "~/types/Device";

export const Devices = ref<Device[]>([]);

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

export function getColorByStatus(status: number): string {
  switch (status) {
    case 1:
      return "#32D74A";

    case 2:
      return "#D73732";

    case 3:
      return "#D7D731";

    default:
      return "#32D74A";
  }
}

export function getImageByType(type: number): string {
  switch (type) {
    case 1:
      return "Forklift";

    case 2:
      return "Excavator";

    case 3:
      return "Crane";

    case 4:
      return "Bulldozer";

    case 5:
      return "Loader";

    default:
      return "Forklift";
  }
}
