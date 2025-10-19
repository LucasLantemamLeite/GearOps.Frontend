<template>
  <section>
    <div v-for="device in Devices">
      <p>{{ device.name }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getDevicesService } from "~/services/requests/GetDevicesService";
import { Devices } from "~/global/Devices";

onMounted(async () => {
  await getDevicesService();
});
</script>
