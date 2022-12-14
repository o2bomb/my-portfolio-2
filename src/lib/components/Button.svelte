<script lang="ts">
    export { sectionId };
    let sectionId: string;
</script>

<a href="#{sectionId}" class="c-Button">
    <slot />
</a>

<style>
    .c-Button {
        font: var(--font-oswald-regular);
        font-size: 1.6rem;
        text-transform: uppercase;
    }
    .c-Button:not(:last-child) {
        margin-bottom: 0.5rem;
    }
</style>
