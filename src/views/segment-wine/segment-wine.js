import router from '../../router';

export default {
    name: "segment-wine",
    mounted() {
        const video = document.getElementById('segment-wine');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};