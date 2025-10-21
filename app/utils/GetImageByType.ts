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
