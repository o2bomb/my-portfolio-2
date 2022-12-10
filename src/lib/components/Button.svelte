<script lang="ts">
    export { sectionId };
    let sectionId: string;
</script>

<a href="#{sectionId}" class="c-Button">
    <slot />
</a>

<style>
    .c-Button {
        font: var(--font-oswald-medium);
        font-size: 2rem;
        text-transform: uppercase;
    }
    .c-Button:not(:last-child) {
        margin-right: 1rem;
    }
</style>
