// Function to store and display AQI data
function storeData(city, aqi, temperature) {
    let data = JSON.parse(localStorage.getItem('aqiData')) || [];
    data.push({ city, aqi, temperature });
    localStorage.setItem('aqiData', JSON.stringify(data));
  }
  
  // Function to display stored AQI data
  function displayData() {
    let data = JSON.parse(localStorage.getItem('aqiData')) || [];
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = ''; // Clear the previous data
  
    data.forEach(item => {
      const dataItem = document.createElement('div');
      dataItem.classList.add('data-item');
      dataItem.innerHTML = `<strong>${item.city}</strong><br> AQI: ${item.aqi}, Temperature: ${item.temperature}°C`;
      dataList.appendChild(dataItem);
    });
  }
  
  // Event listener for form submission
  document.getElementById('aqi-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const aqi = document.getElementById('aqi').value;
    const temperature = document.getElementById('temperature').value;
  
    storeData(city, aqi, temperature);
    displayData();
  
    // Clear the form fields
    document.getElementById('city').value = '';
    document.getElementById('aqi').value = '';
    document.getElementById('temperature').value = '';
  });
  
  // Load the stored data on page load
  window.onload = displayData;
  