Here's the `README.md` for your `DataTable` component:

---

# Data Table with Pagination, Sorting, Filtering, and Notifications in React

This project implements a data table component that features pagination, sorting, filtering, and notifications for new records. It is designed using React and provides a user-friendly interface for viewing and interacting with data fetched from a backend API.

## Features

- **Pagination**: 
  - Allows the user to navigate between pages of data, with adjustable items per page (default is 10 items).
  
- **Search/Filter**: 
  - Includes a search input that filters data based on the `name` field.
  
- **Sorting**: 
  - Users can sort data by clicking on column headers. Sorting is available for the `name`, `age`, and `city` columns, with ascending/descending order toggling upon clicks.
  
- **Real-time Notifications**: 
  - The table automatically checks for new data every 10 seconds. If new data is found, it plays a notification sound and displays a toast message informing the user of the addition.

- **Responsive Design**: 
  - Styled with responsive features for better usability on different screen sizes.

## Demo

![Demo](demo.gif)

## How to Use

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/react-data-table.git
   cd react-data-table
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will start the application at `http://localhost:3000/`.

### Backend Setup

Ensure that you have a backend API running that returns the data in the following format from the endpoint `http://localhost:5000/api/data`:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "age": 25,
    "city": "Los Angeles"
  }
]
```

### Usage

The component `DataTable` fetches data from the API and displays it in a table format with various features such as pagination, sorting, and filtering. Notifications for new data are also included.

To use it in your project:

1. Import the `DataTable` component:

   ```javascript
   import DataTable from './DataTable';
   ```

2. Use the component in your JSX:

   ```jsx
   <div>
     <DataTable />
   </div>
   ```

### Customization

- **Change Items Per Page**: You can modify the number of items displayed per page by updating the value in the `useState` hook:

  ```js
  const [itemsPerPage] = useState(10);  // Change to 20, 50, 100, etc.
  ```

- **Modify API URL**: The current API endpoint for fetching data is set to `'http://localhost:5000/api/data'`. You can modify this URL in the `axios.get` call:

  ```js
  const response = await axios.get('http://localhost:5000/api/data');
  ```

- **Sorting Fields**: Currently, the table allows sorting by `name`, `age`, and `city`. To add more fields, simply adjust the `sortData` function to include additional keys.

- **Notification Sound**: A notification sound is triggered when new data is added. You can replace the `notification.mp3` file located in the `assets` folder with your desired sound file.

### File Structure

```
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── notification.mp3
│   ├── DataTable.css
│   ├── DataTable.js
│   └── index.js
├── package.json
└── README.md
```

### Design Details

1. **Pagination**:
   - Pagination buttons are dynamically generated based on the total number of data records.
   - Users can navigate through pages, with the current page highlighted.

2. **Sorting**:
   - Clicking on a column header sorts the table based on that column's data.
   - The sort direction (ascending or descending) toggles on subsequent clicks, and an arrow (↑/↓) is displayed to indicate the direction.

3. **Search/Filter**:
   - Users can filter the table data by entering a search term in the input field. The search is case-insensitive and applies to the `name` column.

4. **Real-Time Notifications**:
   - Every 10 seconds, the component checks for new data and plays a sound + displays a toast notification if new records are found.

### Dependencies

- `axios`: For fetching data from the backend API.
- `react-hot-toast`: For displaying toast notifications when new data is added.
- `use-sound`: For playing the notification sound when a new record is detected.

### Contributions

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Toast notifications provided by [react-hot-toast](https://react-hot-toast.com/).
- Notification sound feature built using [use-sound](https://github.com/joshwcomeau/use-sound).

---

This `README.md` includes clear instructions, customization options, and a detailed breakdown of your component's functionality.
