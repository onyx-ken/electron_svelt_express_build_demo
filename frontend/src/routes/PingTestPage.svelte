<script>
    import { onMount } from 'svelte';
    let pingResult = "Loading...";

    async function fetchPing() {
        try {
            const response = await fetch("http://localhost:4000/api/ping");
            const data = await response.json();
            pingResult = `${data.message} (Received at: ${data.timestamp})`;
        } catch (error) {
            pingResult = "Error fetching ping: " + error.message;
        }
    }

    onMount(fetchPing);
</script>

<section>
    <h1>Ping Test</h1>
    <p>Server Response: <strong>{pingResult}</strong></p>
    <button on:click={fetchPing}>Ping Again</button>
</section>

<style>
    section {
        text-align: center;
    }

    button {
        margin-top: 10px;
        padding: 8px 12px;
        border: none;
        background-color: #ff3e00;
        color: white;
        cursor: pointer;
        border-radius: 4px;
    }

    button:hover {
        background-color: #cc3200;
    }
</style>
