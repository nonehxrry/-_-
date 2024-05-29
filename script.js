function showVisualization() {
    const chartDiv = document.getElementById('chart');
    chartDiv.innerHTML = '<p>Visualizing detected attacks...</p>';

    // Example data
    const data = [
        { attack: 'SQL Injection', count: 12 },
        { attack: 'DDoS', count: 9 },
        { attack: 'Cross-Site Scripting', count: 15 },
    ];

    // Creating a simple bar chart
    let chartHTML = '<div style="display: flex; justify-content: space-around; width: 100%;">';
    data.forEach(item => {
        chartHTML += `
            <div style="width: 30%; text-align: center;">
                <div style="background: #333; color: #fff; height: ${item.count * 10}px; margin-bottom: 0.5rem;">
                    ${item.count}
                </div>
                ${item.attack}
            </div>
        `;
    });
    chartHTML += '</div>';

    chartDiv.innerHTML = chartHTML;
}
