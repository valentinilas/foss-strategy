import router from '../../router';

export default {
    name: "segment-grain",
    mounted() {
        const video = document.getElementById('segment-grain');
        video.addEventListener('ended', function() {
            router.push('/segment-area')
        });

    }
};