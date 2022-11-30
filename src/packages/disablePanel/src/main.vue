<script>
export default {
  functional: true,
  name: 'lkDisablePanel',
  render(h, context) {
    const { props } = context;
    if (!props.contextmenu) {
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
    if (!props.tool) {
      window.addEventListener('keydown', (e) => {
        if (e.code === 'F12') {
          e.preventDefault();
        }
      });
    }
  }
};
</script>
