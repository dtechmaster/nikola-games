<template>
    <v-dialog v-if="!gameStarted" v-model="dialog" persistent width="100vw" height="100vh">
        <v-sheet class="align-center justify-center h-100 w-100">
            <v-card-actions>
                <Button size="x-large" @click="router.push('/')" prepend-icon="mdi-arrow-left">BACK</Button>
            </v-card-actions>
            <Row style="height: calc(50vh)">
                <span class="text-h4 mx-4">{{ props.title }}</span>
            </Row>
            <Row class="align-center justify-centert" style="height: calc(20vh - 118px)">
                <Button color="error" size="x-large" @click="startGame">START</Button>
            </Row>
        </v-sheet>
    </v-dialog>
    <slot v-else></slot>
    <v-card-actions v-if="gameStarted" class="align-center justify-center" style="position: absolute;">
        <Button size="x-large" @click="router.push('/')" prepend-icon="mdi-arrow-left">BACK</Button>
    </v-card-actions>
</template>

<script setup lang="ts">
const gameStarted = ref(false);
const dialog = ref(true);
const router = useRouter();

type Props = {
    title?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: "Game Tittle here"
})
const emit = defineEmits(["gameStarted"]);

async function startGame() {
    gameStarted.value = true;
    await nextTick();
    emit('gameStarted');
    document.body.requestFullscreen()
}
</script>