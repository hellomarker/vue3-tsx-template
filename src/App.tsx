import { defineComponent } from "vue";
import { RouterView } from "vue-router";

// import ''

export default defineComponent({
  setup(props, { attrs, slots, emit }) {
    return () => (
      <>
        <RouterView></RouterView>
      </>
    );
  },
});
