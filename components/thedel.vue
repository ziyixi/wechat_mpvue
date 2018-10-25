<template>
  <div>
    <rich-text :nodes="thenodes"></rich-text>
  </div>
</template>

<script>
export default {
  props: ["text"],
  computed: {
    thenodes: function() {
      return [
        {
          name: "del",
          attrs: {
            style: "color: black; font-size:140%;"
          },
          children: [
            {
              type: "text",
              text: this.text
            }
          ]
        }
      ];
    }
  }
};
</script>
