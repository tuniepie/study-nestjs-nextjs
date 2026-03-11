import requests

def get_crypto_prices():
    # API endpoint từ CoinGecko
    url = "https://api.coingecko.com/api/v3/simple/price"
    
    # Tham số để lấy giá của Bitcoin và Ethereum
    params = {
        'ids': 'bitcoin,ethereum',
        'vs_currencies': 'usd',
    }
    
    try:
        # Gọi API
        response = requests.get(url, params=params)
        response.raise_for_status()  # Kiểm tra lỗi HTTP
        data = response.json()
        
        # In giá của Bitcoin và Ethereum
        print(f"BTC: ${data['bitcoin']['usd']}")
        print(f"ETH: ${data['ethereum']['usd']}")
    except requests.exceptions.RequestException as e:
        print(f"Lỗi khi gọi API: {e}")

if __name__ == "__main__":
    get_crypto_prices()
