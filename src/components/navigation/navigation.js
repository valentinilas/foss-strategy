export default {
    name: 'Navigation',
    data() {
        return {
            FsText: "Full screen"
        }
    },
    methods: {
        toggleFSMode() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                this.$emit('fs', 'scale-up');
                this.FsText = 'Exit full screen';

            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.$emit('fs', 'scale-down');
                    this.FsText = 'Full screen';
                }
            }

        }
    }

}