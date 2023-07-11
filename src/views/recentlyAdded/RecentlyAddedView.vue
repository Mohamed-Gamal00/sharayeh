<template>
  <recentlyAddedCom :News="News" />
</template>

<script>
import almona from '@/assets/images/almona.png'
import recentlyAddedCom from '../../components/recentlyAdded/recentlyAddedCom.vue'

export default {
  components: { recentlyAddedCom },
  data() {
    return {
      News: [
        {
          id: 1,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 2,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 3,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 4,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 5,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 6,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 7,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 8,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 9,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 10,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
