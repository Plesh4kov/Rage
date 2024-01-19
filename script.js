document.getElementById('connectWallet').addEventListener('click', async () => {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            const publicKey = response.publicKey.toString();
            document.getElementById('walletInfo').innerText = 'Гаманець підключено: ' + publicKey;
            
            // Отримання балансу гаманця
            getWalletBalance(publicKey);

            // Отримання інформації про NFT та інші дані
            // fetchWalletData(publicKey); // Цю функцію можна реалізувати для отримання даних про NFT
            
        } catch (err) {
            console.error('Не вдалося підключити гаманець:', err);
        }
    } else {
        console.log('Гаманець Solana не знайдено!');
    }
});

async function getWalletBalance(publicKey) {
    try {
        const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
        const walletBalance = await connection.getBalance(new solanaWeb3.PublicKey(publicKey));
        document.getElementById('walletInfo').innerText += '\nБаланс: ' + (walletBalance / solanaWeb3.LAMPORTS_PER_SOL) + ' SOL';
    } catch (err) {
        console.error('Помилка отримання балансу гаманця:', err);
    }
}
