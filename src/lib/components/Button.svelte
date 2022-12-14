<script lang="ts">
    export { sectionId };
    let sectionId: string;
</script>

<a href="#{sectionId}" class="c-Button">
    <slot />
</a>

<style>
    .c-Button {
        padding-left: 0.6rem;
        /* background-image: linear-gradient(to bottom, #a1a1aa, #a1a1aa); */
        background-image: linear-gradient(to bottom, #18181b, #18181b);
        background-position: 2px 4px;
        background-size: 2px 1.5rem;
        background-repeat: no-repeat;
        font: var(--font-oswald-regular);
        font-size: 1.6rem;
        text-transform: uppercase;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .c-Button:hover {
        margin-left: 0.3rem;
    }

    .c-Button:not(:last-child) {
        margin-bottom: 0.5rem;
    }
</style>
