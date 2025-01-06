document.getElementById('carbon-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const transport = document.getElementById('transport').value;
    const energy = document.getElementById('energy').value;
    const waste = document.getElementById('waste').value;
  
    // Example calculations for carbon footprint (just an estimate)
    const carbonFootprint = (transport * 0.2) + (energy * 0.4) + (waste * 0.6);
  
    document.getElementById('result').innerHTML = `<h3>Your Carbon Footprint: ${carbonFootprint} kg CO2 per month</h3>`;
  });
  