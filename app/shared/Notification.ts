export const notification = reactive({
  message: "",
  duration: 5,
  type: "success",
});

let timer: any = null;

export function setNotification(message: string, duration: number = 5, type: "Success" | "Error" | "Warning" | "Info") {
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
