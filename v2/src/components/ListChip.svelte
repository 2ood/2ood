<listchip>
    <slot></slot>
</listchip>


<style>
    listchip {
        display : inline-flex;
        justify-content: center;
        flex-direction: column;
        background-color :var(--color-gray-background);
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        color : var(--color-blue-primary);
        transition: height 4s ease-in-out;
        padding : 10px;
        gap : .5rem;
        margin-bottom: .5rem;
        min-width : 200px;
    }
</style>