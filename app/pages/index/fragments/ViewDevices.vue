<template>
  <section v-if="Devices.length != 0" class="view_devices-background">
    <div v-for="device in Devices" @click="openEdit(device)" class="view_devices-cards">
      <div :style="{ backgroundColor: getColorByStatus(device.status) }" class="view_devices-status"></div>

      <p class="view_devices-name">{{ device.name }}</p>

      <ImageComponent :static-img="`/Images/${getImageByType(device.type)}.png`" :alt-img="`${getImageByType(device.type)} Image`" class="view_devices-type" />

      <div v-if="device.status === 3" class="view_devices-dates-container">
        <div>
          <ImageComponent static-img="/Icons/StartIcon.svg" />
          <p>{{ device.start ? formateDateISO(device.start, true) : "Não definido" }}</p>
        </div>

        <div>
          <ImageComponent static-img="/Icons/ReturnIcon.svg" />
          <p>{{ device.return ? formateDateISO(device.return, true) : "Não definido" }}</p>
        </div>
      </div>
    </div>

    <Pagination />
  </section>

  <DeviceModal :device="editForm.deviceEdit!" v-model="editForm.isEditing" />
</template>

<script setup lang="ts">
import { getDevices } from "~/services/requests/getDevices";
import { Devices } from "~/shared/Devices";
import type { Device } from "~/types/Device";
import { getColorByStatus, getImageByType } from "~/shared/Devices";
import { createdConnect } from "~/services/signalR/events/createdConnect";
import { updatedConnect } from "~/services/signalR/events/updatedConnect";
import { deletedConnect } from "~/services/signalR/events/deletedConnect";
import DeviceModal from "./DeviceModal.vue";
import { formateDateISO } from "~/utils/dates/formateDateISO";
import Pagination from "./Pagination.vue";
import { Pages } from "~/shared/Pages";

onMounted(() => {
  createdConnect();
  updatedConnect();
  deletedConnect();
});

const editForm = reactive({
  deviceEdit: {},
  isEditing: false,
} as { deviceEdit: Device; isEditing: boolean });

function openEdit(device: Device) {
  editForm.deviceEdit = device;
  editForm.isEditing = true;
}

watch(
  () => Pages.Current,
  (current) => {
    getDevices(current || 1);
  },
  { immediate: true }
);
</script>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

.view_devices {
  &-background {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 1rem;
    width: 100%;
    height: auto;
    align-items: center;
    padding: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 6rem;
    border-radius: Var.$default-border-radius;
    border: Var.$default-border;
    box-shadow: Var.$default-box-shadow;
  }

  &-cards {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    height: 22rem;
    align-items: center;
    background-color: Var.$primary-dark-color;
    border-radius: Var.$default-border-radius;
    box-shadow: Var.$default-box-shadow;
  }

  &-status {
    position: absolute;
    display: flex;
    width: 100%;
    height: 1rem;
    top: 0;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  &-type {
    margin-bottom: 0.5rem;
    width: 9rem;
  }

  &-name {
    padding: 0.5rem;
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    color: white;
    border: 2px solid white;
    border-radius: Var.$default-border-radius;
  }

  &-dates-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    & div {
      display: flex;
      gap: 2rem;
      align-items: center;
      width: 100%;
      justify-content: center;

      & img {
        width: 2rem;
      }

      & p {
        font-size: 1.2rem;
        color: white;
      }
    }
  }
}
</style>

<style lang="scss">
@use "../../../styles/globalVariables.scss" as Var;

// Responsividades //

.view_devices {
  @media (min-width: 600px) {
    &-background {
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      margin-bottom: 7rem;
    }

    &-cards {
      height: 23rem;
    }

    &-type {
      width: 10rem;
    }

    &-name {
      font-size: 1.4rem;
    }

    &-dates-container div p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    &-cards {
      transition: all 200ms ease;
      cursor: pointer;

      &:hover {
        transform: translateY(3px);
      }
    }
  }
}
</style>
