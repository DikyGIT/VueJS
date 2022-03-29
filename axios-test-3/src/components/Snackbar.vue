<template>
    <b-container></b-container>
</template>
<script>
import { EventBus } from "@/eventBus";
export default {
  name: "Snackbar",
  data() {
    return {
    }
  },
  created() {
    EventBus.$on(
      "createSnackbar", ({ snackbar_message: snackbar_message, variant, duration }) => {
        let durationBar = undefined;
        (duration === undefined) ? durationBar = 10000 : durationBar = duration
        this.$toasted[variant](snackbar_message, {
          duration: durationBar,
          singleton: true,
          action: {
            text: 'Close',
            onClick: (e, toastObject) => {
                toastObject.goAway(0);
            }
          }
        })
      }
    );

    EventBus.$on("dismiss", () => {
      this.show = false;
    });

    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/showMessage") {
        this.content = state.snackbar.content;
        this.color = this.variant[state.snackbar.variant];
        this.show = true;
      }
      if (mutation.type === "snackbar/dismiss") {
        this.show = false;
      }
    });
  }
};
</script>
