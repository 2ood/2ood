<script>
    export let onclick;
    export let algin_self;
</script>

<button onclick={onclick} style={`align-self: ${algin_self}`}>
    <slot></slot>
</button>


<style>
    button {
        background-color: var(--color-blue-primary);
        color: white;
        border: none;
        padding: .5rem 1rem;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        font-size: .8rem;
        transition: background-color 0.1s ease;
    }

    button:hover {
        background-color: var(--color-blue-secondary);
    }

    button:active {
        background-color: var(--color-blue-shading);
    }
</style>
