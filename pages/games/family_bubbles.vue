<template>
    <StartDialog title="Family Bubbles" @game-started="gameLoop">
        <v-sheet ref="gameArea" class="align-center justify-center h-100 w-100" color="pink-lighten-5"></v-sheet>
    </StartDialog>
</template>

<script setup lang="ts">
const gameArea = ref<HTMLDivElement>();

function Bubble(): HTMLDivElement {
    let bubble = document.createElement('div');
    let maxHeight = Math.floor(window.innerHeight / 2); // 30 of the window height
    let minHeight = Math.floor(maxHeight / 4);
    let randomHeight = Math.floor(Math.random() * maxHeight) + minHeight; // number between 50 and 200
    let randomLeft = Math.floor(Math.random() * window.innerWidth); // number between 0 and window.innerWidth
    let randomTop = Math.floor(Math.random() * window.innerHeight); // number between 0 and window.innerHeight
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    bubble.style.border = "1px solid black";
    bubble.style.backgroundColor = `#${randomColor}`;
    if (!bubble.style.backgroundColor) bubble.style.backgroundColor = "#007bff"; // light blue
    bubble.style.height = `${randomHeight}px`;
    bubble.style.width = `${randomHeight}px`;
    bubble.style.left = (randomLeft - randomHeight) < 0 ? `${randomLeft}px` : `${randomLeft - (randomHeight)}px`;
    bubble.style.top = (randomTop - randomHeight) < 0 ? `${randomTop}px` : `${randomTop - (randomHeight)}px`;
    bubble.style.position = "absolute";
    bubble.style.borderRadius = "100%";
    bubble.style.overflow = "hidden";
    bubble.style.display = "flex";
    bubble.style.justifyContent = "center";
    bubble.style.alignItems = "center";
    bubble.className = "bubble";

    let video = document.createElement('video');
    video.src = getRandomVideoSrc();
    video.style.height = `${randomHeight - (randomHeight / 10)}px`;
    video.style.width = `${randomHeight - (randomHeight / 10)}px`;
    video.style.objectFit = "cover";
    video.style.borderRadius = "100%";
    video.muted = true;
    video.loop = true;

    bubble.appendChild(video);

    const clickHandler = () => {
        bubble.remove();
        $utils.audio('/content/common/pock.mp3').play();
        if (document.getElementsByClassName('bubble').length == 0) {
            gameLoop();
        }
    }

    bubble.addEventListener('click', clickHandler);
    bubble.addEventListener('touchend', clickHandler);

    window.addEventListener('killAllBubbles', () => {
        bubble.remove();
    });

    return bubble;
}

const lastIndex = ref(0);
function getRandomVideoSrc(): string {
    const videos = [
        '/content/family_bubbles/1.mp4',
        '/content/family_bubbles/2.mp4',
        '/content/family_bubbles/3.mp4',
    ]

    lastIndex.value++;
    if (lastIndex.value >= videos.length) lastIndex.value = 0;

    return videos[lastIndex.value];
}
async function gameLoop() {

    let bubblesCount = Math.floor(Math.random() * 2) + 5;

    for (let i = 0; i < bubblesCount; i++) {
        let bubble = Bubble();
        // if(i == bubblesCount - 1) {
        //     bubble.getElementsByTagName('video')[0].muted = false;
        // }
        document.body.appendChild(bubble);
        await nextTick();
        bubble.getElementsByTagName('video')[0]?.play();
    }

}

onUnmounted(() => {
    window.dispatchEvent(new Event('killAllBubbles'));
})
</script>

<style>
.bubble {
    animation: bubble 0.5s ease-in-out;
}

@keyframes bubble {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>