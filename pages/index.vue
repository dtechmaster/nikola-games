<template>
    <v-sheet color="pink-lighten-5 h-100">
        <v-card-title class="d-flex align-center justify-center">
            <v-spacer />
            <span class="text-h4">Nikola Games</span>
            <video src="/content/family_bubbles/2.mp4" loop autoplay muted class="logo" />
            <v-spacer />
        </v-card-title>
        <Row v-for="game in games">
            <Button @click="router.push(game.path)" size="x-large" class="text-capitalize text-h5">{{ getPageName(game.path) }}</Button>
        </Row>
    </v-sheet>
</template>

<script setup lang="ts">
const router = useRouter();

const games = router.getRoutes().filter(r => r.path.startsWith("/games"));

function getPageName(path: string) {
    let fileName = path.replace("/games/", '');
    let words = fileName.split('_');
    let name = "";

    words.forEach((word) => {
        name += `${word[0].toUpperCase()}${word.slice(1, word.length)} `
    })

    return name;
}
</script>

<style scoped>
.logo {
    height: 80px;
    width: 80px;
    object-fit: cover;
    object-position: center;
    margin: 0 5px;
    border-radius: 100%;

}
</style>