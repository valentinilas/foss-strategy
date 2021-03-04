/**
 * 
 * @param  {...any} videoUrls 
 * @returns array of video blobs
 */
export const preloadVideos = (...videoUrls) => {
    const videoPromises = videoUrls.map((videoUrl) => {
        return new Promise((resolve) => {
            fetch(videoUrl)
                .then((data) => {
                    console.log(data);
                    return data.blob();
                })
                .then(blob => {
                    var url = window.URL.createObjectURL(blob)
                    resolve(url);
                })
        })
    })

    return Promise.all(videoPromises);
}


//    const res = await fetch('http://xxxx.mp4')
//     const blob = await res.blob()
//     const src = window.URL.createObjectURL(blob)
//     const el = document.getElementById('video')
//     el.src = src
//     el.play()