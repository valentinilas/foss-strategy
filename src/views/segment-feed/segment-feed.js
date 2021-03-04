import router from '../../router';

export default {
    name: "segment-feed",
    mounted() {
        const video = document.getElementById('segment-feed');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};