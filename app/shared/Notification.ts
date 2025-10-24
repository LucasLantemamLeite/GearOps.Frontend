export const notification = reactive({
  message: "",
  duration: 5,
  type: "success",
});

let timer: any = null;

export function setNotification(message: string, duration: number = 5, type: "Success" | "Error" | "Attention" | "Info") {
  if (timer) clearTimeout(timer);

  notification.message = message;
  notification.duration = duration;
  notification.type = type;

  timer = setTimeout(() => {
    notification.message = "";
    notification.type = "Success";
    timer = null;
  }, duration * 1000);
}

export function getColorByType(type: string): string {
  switch (type) {
    case "Success":
      return "#32D74A";

    case "Error":
      return "#E93626";

    case "Attention":
      return "#D7D731";

    case "Info":
      return "#2D73DD";

    default:
      return "#32D74A";
  }
}
