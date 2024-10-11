const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors());

const mockData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'London' },
    { id: 3, name: 'Sam Johnson', age: 22, city: 'Paris' },
    { id: 4, name: 'Michael Lee', age: 35, city: 'Berlin' },
    { id: 5, name: 'Sarah Brown', age: 28, city: 'Tokyo' },
    { id: 6, name: 'David Clark', age: 40, city: 'Sydney' },
    { id: 7, name: 'Laura Wilson', age: 27, city: 'Los Angeles' },
    { id: 8, name: 'Emily Davis', age: 32, city: 'Rome' },
    { id: 9, name: 'James White', age: 29, city: 'Barcelona' },
    { id: 10, name: 'Chris Adams', age: 24, city: 'Toronto' },
    { id: 11, name: 'Natalie Moore', age: 26, city: 'Dubai' },
    { id: 12, name: 'Tom Harris', age: 38, city: 'Moscow' }
];

app.get('/api/data', (req, res) => {
  res.json(mockData);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
