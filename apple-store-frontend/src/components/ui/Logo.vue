<template>
  <div class="logo-container">
    <div class="title-block">
      <div class="logo-text">Apple Store</div>
    </div>
    <div class="content-block">
      <div class="logo-inner">
        <div class="logo-image logo-black"></div>
        <div class="logo-image logo-white"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 208px;
  height: 264px;
}

.title-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 40px;
  gap: 11px;
  width: 208px;
  height: 72px;
  background-color: #000000;
}

.logo-text {
  font-family: 'SF Pro Display', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #ffffff;
}

.content-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 52px;
  width: 208px;
  height: 192px;
  background-color: #e4e4e4;
}

.logo-inner {
  box-sizing: border-box;
  width: 128px;
  height: 112px;
  border: 1px dashed #9747ff;
  border-radius: 5px;
}

.logo-image {
  position: absolute;
  width: 96px;
  height: 32px;
}

.logo-black {
  left: 16px;
  top: 16px;
  background-color: #000000;
}

.logo-white {
  left: 16px;
  top: 64px;
  background-color: #ffffff;
}
</style>