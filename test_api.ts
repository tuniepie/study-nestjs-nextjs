import axios from 'axios';
import * as dotenv from 'dotenv';

// Load biến môi trường từ file .env
dotenv.config();

// Lấy API key từ biến môi trường
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

// Thành phố Hồ Chí Minh
const CITY = 'Ho Chi Minh City';

/**
 * Gọi API thời tiết và in ra thông tin thời tiết hiện tại.
 */
async function getWeather() {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;

        // In ra thông tin thời tiết
        console.log(`Thời tiết hiện tại ở ${CITY}: ${data.weather[0].description}`);
        console.log(`Nhiệt độ: ${data.main.temp}°C`);
        console.log(`Độ ẩm: ${data.main.humidity}%`);
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
    }
}

// Chạy hàm getWeather
getWeather();

/**
 * Setup và chạy file:
 * 1. Cài đặt dependencies:
 *    npm install axios dotenv
 * 2. Cài đặt ts-node (nếu chưa có):
 *    npm install -g ts-node
 * 3. Chạy file:
 *    ts-node test_api.ts
 */