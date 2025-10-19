<template>
  <section v-if="Devices.length != 0" class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full h-auto items-center p-4 gap-4 mb-8 rounded-[0.9rem] border-2 border-[#272727] shadow-md md:mb-[7rem]">
    <div v-for="device in Devices" class="flex relative h-[20rem] items-center justify-center p-4 flex-col bg-[#272727] text-[white] text-[1.5rem] rounded-[0.9rem] cursor-pointer shadow-md md:transition-all md:hover:translate-y-[3px]">
      <div :style="{ backgroundColor: getColorByStatus(device.status) }" class="flex absolute w-full h-[1rem] top-0 rounded-t-[0.5rem]"></div>

      <ImageComponent :static-img="`/Images/${getImageByType(device.type)}.png`" :alt-img="`${getImageByType(device.type)} Image`" class="w-[9rem] mb-10 md:w-[10rem]" />

      <p class="absolute bottom-4 p-2 text-center text-[1.4rem] border-2 rounded-[0.9rem]">{{ device.name }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getDevicesService } from "~/services/requests/GetDevicesService";
import { Devices } from "~/global/Devices";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { createdConnect } from "~/services/signalR/CreatedConnect";
import { deletedConnect } from "~/services/signalR/DeletedConnect";
import { updatedConnect } from "~/services/signalR/UpdatedConnect";

onMounted(async () => {
  await getDevicesService();

  // Alterar para permitir o teste via ip privado ao rodar no docker-compose
  var connection = new HubConnectionBuilder().withUrl("http://localhost:5059/v1/devicesHub").withAutomaticReconnect().build();

  createdConnect(connection);
  deletedConnect(connection);
  updatedConnect(connection);

  connection.start();
});

function getImageByType(type: number): string {
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

function getColorByStatus(status: number): string {
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
</script>
