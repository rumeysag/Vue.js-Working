<template>
    <div>
      <p>Lamba durumu : {{ status }}</p>
      <button @click="openLamp">Lambayı Aç/Kapat</button>
      <hr>
    </div>
  </template>
  
  <script>
  export default {
    data: function() {
      return {
        status: "Kapalı"
      };
    },
    methods: {
      openLamp() {
        this.status = "Açık...";
      }
    }
  };
  </script>
  