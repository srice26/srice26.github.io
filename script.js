// Load and parse CSV
Papa.parse("survey.csv", {
    download: true,
    header: true,
    complete: function(results) {
        const events = results.data;
        renderEventList(events);
    }
});

function renderEventList(events) {
    const list = document.getElementById("event-list");

    events.forEach(event => {
        const item = document.createElement("button");
        item.className = "event-button";
        item.textContent = event.Name;   // CSV column name
        item.onclick = () => showDetails(event);
        list.appendChild(item);
    });
}

function showDetails(event) {
    const details = document.getElementById("event-details");
    details.innerHTML = `
        <strong>${event.Name}</strong><br>
        <p>Date: ${event.Date}</p>
        <p>Location: ${event.Location}</p>
        <p>Description: ${event.Description}</p>
    `;
}
