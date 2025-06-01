<script>
   import Icon from '@iconify/svelte';
</script>


<button id="back-button" onclick={() => history.back()}>
    <Icon icon="mdi:arrow-left" width="100%" height="100%"/>
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