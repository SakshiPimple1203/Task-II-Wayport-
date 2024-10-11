import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSound from 'use-sound';
import { Toaster, toast } from 'react-hot-toast';
import notificationSound from '../../assets/notification.mp3';
import './DataTable.css';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [prevDataLength, setPrevDataLength] = useState(0);
  const [loading, setLoading] = useState(true);
  const [play] = useSound(notificationSound);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

 
  useEffect(() => {
    if (data.length > prevDataLength) {
      play();
      toast.success('New record added!');
    }
    setPrevDataLength(data.length);
  }, [data, prevDataLength, play]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  // Sort data
  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setFilteredData(sortedData);
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Toaster />
      <h1>Data Table</h1>

 
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="filter-input"
      />

      {loading ? (
        <div>Loading...</div>
      ) : filteredData.length === 0 ? (
        <div>No records found.</div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => sortData('name')}>
                Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th onClick={() => sortData('age')}>
                Age {sortConfig.key === 'age' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
              <th onClick={() => sortData('city')}>
                City {sortConfig.key === 'city' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredData.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default DataTable;
