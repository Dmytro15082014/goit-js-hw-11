// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

import axios from "axios";
API_KEY = "49627345-81d87c81626646e8cd4c1e6ab";
axios.defaults.baseURL = 'pixabay.com/api';