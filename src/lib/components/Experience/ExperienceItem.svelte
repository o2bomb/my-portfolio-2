<script lang="ts">
    export { animate, company, from, to, role, assignedProjects };

    interface AssignedProject {
        name?: string;
        achievements: string[];
    }

    let animate: boolean;
    let company: string;
    let from: string;
    let to: string | undefined;
    let role: string;
    let assignedProjects: AssignedProject[] = [];
</script>

<div class="c-ExperienceItem" class:animate>
    <div class="content">
        <div class="flex">
            <h3 class="company">
                {company}
                <span class="date">{from} - {@html to || "<strong>Present</strong>"}</span>
            </h3>
        </div>
        <p class="role">{role}</p>
        {#each assignedProjects as { name, achievements }}
            <div class="project">
                {#if name}
                    <p class="project-title">
                        <span>Assigned Project:</span>{name}
                    </p>
                {/if}
                <ul class="achievements">
                    {#each achievements as a}
                        <li>{a}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
    <div class="border" />
</div>

<style>
    .c-ExperienceItem {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: hidden;
    }

    .border {
        display: none;
        min-height: 1px;
        width: 100%;
        max-width: 2000px;
        background: linear-gradient(to right, transparent, #d4d4d8, transparent);
        opacity: 0;
    }
    .c-ExperienceItem:not(:last-child) .border {
        display: block;
    }
    .c-ExperienceItem:not(:last-child).animate .border {
        animation: show-border 1s 0.5s cubic-bezier(0.83, 0, 0.17, 1) forwards;
    }
    @keyframes show-border {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media (max-width: 1400px) {
        .border {
            background: #d4d4d8;
        }
    }

    .c-ExperienceItem::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #e4e4e7;
    }

    .c-ExperienceItem.animate::after {
        animation: slide-down 1s 0.5s cubic-bezier(0.83, 0, 0.17, 1) forwards;
    }
    @keyframes slide-down {
        0% {
            transform: translateY(0);
            background-color: #e4e4e7;
        }
        100% {
            transform: translateY(102%);
            background-color: #d4d4d8;
        }
    }

    .content {
        width: 100%;
        max-width: 1400px;
        padding: 1rem 2rem;
    }

    .flex {
        display: inline-flex;
        align-items: baseline;
    }

    .company {
        max-width: 600px;
        margin-bottom: 0.3rem;
        margin-right: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .role {
        margin-bottom: 0.3rem;
        font: var(--font-worksans-semibold);
        font-size: 1rem;
        text-transform: uppercase;
    }

    .date {
        font-weight: 400;
        color: #52525b;
        white-space: nowrap;
    }

    .project:not(:last-child) {
        margin-bottom: 0.5rem;
    }

    .project .project-title span {
        margin-right: 0.5rem;
        color: #52525b;
    }

    ul {
        list-style: none;
    }
    .achievements li {
        padding-left: 0.7rem;
        background-image: linear-gradient(to bottom, #18181b, #18181b);
        background-position: 2px 4px;
        background-size: 3px 1rem;
        background-repeat: no-repeat;
    }

    .spacer {
        min-height: 1rem;
    }

    a {
        position: absolute;
        top: 1rem;
        right: 2rem;
        white-space: nowrap;
    }
</style>
