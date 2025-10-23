import { HubConnectionBuilder } from "@microsoft/signalr";
import { setNotification } from "~/shared/Notification";

// Alterar para permitir o teste via ip privado ao rodar no docker-compose
export var connection = new HubConnectionBuilder().withUrl("http://localhost:5059/v1/devicesHub").withAutomaticReconnect().build();

try {
  connection.start();
} catch {
  setNotification("Erro ao tentar se conectar no signalR, tempo real desativado.", 5, "Warning");
}
