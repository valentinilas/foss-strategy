import router from '../../router';

export default {
    name: "segment-meat",
    mounted() {
        const video = document.getElementById('segment-meat');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};