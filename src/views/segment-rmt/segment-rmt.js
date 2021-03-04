import router from '../../router';

export default {
    name: "segment-rmt",
    mounted() {
        const video = document.getElementById('segment-rmt');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};