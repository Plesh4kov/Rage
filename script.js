document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.solana && window.solana.isPhantom) {
        try {
            // Підключення до гаманця
            const response = await window.solana.connect();
            const publicKey = response.publicKey.toString();

            // Відображення інформації про гаманець
            document.getElementById('walletInfo').innerText = 'Гаманець підключено: ' + publicKey;

            // Тут можна додати код для отримання та відображення додаткової інформації про гаманець
            // Наприклад, балансу, володіння NFT, історії транзакцій тощо

        } catch (err) {
            console.error('Не вдалося підключити гаманець:', err);
        }
    } else {
        console.log('Гаманець Solana не знайдено!');
    }
});
