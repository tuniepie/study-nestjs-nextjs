import requests
import os

# Lấy API key từ biến môi trường
API_KEY = os.getenv('OPENWEATHERMAP_API_KEY')

# Thành phố Hồ Chí Minh
CITY = 'Ho Chi Minh City'

# Gọi API thời tiết
def get_weather():
    url = f'http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric'
    response = requests.get(url)
    data = response.json()
    
    # In ra thông tin thời tiết
    print(f"Thời tiết hiện tại ở {CITY}: {data['weather'][0]['description']}")
    print(f"Nhiệt độ: {data['main']['temp']}°C")
    print(f"Độ ẩm: {data['main']['humidity']}%")

if __name__ == '__main__':
    get_weather()
