<script>
    import MdArrowBack from 'svelte-icons/md/MdArrowBack.svelte'
</script>


<button id="back-button" onclick={() => history.back()}>
    <MdArrowBack />
</button>
<style>
    #back-button {
        position: absolute; 
        display: inline-block;
        width: 100px;
        height: 100px;
        top: 30px;
        left: 30px;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        background-color: transparent;
    }
</style>