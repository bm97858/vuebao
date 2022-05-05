<template>
  <div>
    <!-- 语法: class="{类名: 布尔值, 类名2: 布尔值}" -->
    <!-- 作用: 动态设置class -->
    <ul>
      <button
        :class="{ grey: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        开关
      </button>
      <!-- ------------ -->
      <button
        :class="{ gery: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        111
      </button>
      <button
        :class="{ gey: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        2222
      </button>
      <button
        :class="{ grey: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        33333
      </button>
      <button
        :class="{ grey: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        44444444
      </button>
      <button
        :class="{ grey: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        555
      </button>
      <button
        :class="{ grey: isOn === true, white: isOn === false }"
        @click="isOn = !isOn"
      >
        666
      </button>
      <button
        :class="{ grey: isOn === false, white: isOn === true }"
        @click="isOn = !isOn"
      >
        777
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { isOn: false };
  },
  methods: {},
};
</script>

<style>
.grey {
  background-color: #111;
}
.white {
  background-color: white;
}
</style>
