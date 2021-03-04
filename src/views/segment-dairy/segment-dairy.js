import router from '../../router';

export default {
    name: "segment-dairy",
    mounted() {
        const video = document.getElementById('segment-dairy');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};