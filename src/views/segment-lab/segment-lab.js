import router from '../../router';

export default {
    name: "segment-lab",
    mounted() {
        const video = document.getElementById('segment-lab');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};