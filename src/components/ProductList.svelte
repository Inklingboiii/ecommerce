<script>
    export let products
    console.log(products)
</script>
<ul>
    {#each products as product}
        <li>
            <img src={`https://unsplash.it/${Math.floor(Math.random() * (2000 - 500 + 1) + 500)}/${Math.floor(Math.random() * (1500 - 500 + 1) + 500)}`} alt="">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>€{product.price}</p>
            <a href={`/products/${product.id}`}>More Info</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(24ch, 1fr));
		gap: 2rem;
		padding: 0;
    }

    ul > li {
        list-style-type: none;
        background-color: var(--color-gray);
        padding: 1em;
    }
</style>