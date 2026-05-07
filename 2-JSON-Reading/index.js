 async function loadData() {
    const response = await axios.get("data.json");
    console.log(response.data)
    document.querySelector("#output")
        .innerHTML = `

        <ul>
                <li>Name: ${response.data.Name}</li>
                <li>Mobile Number: ${response.data.Mobile}</li>
                <li>Current Address: ${response.data["Permanent address"]}</li>
                <li>Permanent Address ${response.data["current Address"]}</li>            
            </ul>
                   
        `
}
loadData();