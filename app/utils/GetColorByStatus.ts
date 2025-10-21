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
