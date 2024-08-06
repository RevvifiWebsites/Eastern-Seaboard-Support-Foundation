document.getElementById('fileInput').addEventListener('change', handleFile, false);

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonSheet = XLSX.utils.sheet_to_json(worksheet);

        // Sort the JSON data
        jsonSheet.sort((a, b) => {
            // Assuming we are sorting based on the first column
            const firstColumn = Object.keys(a)[0];
            if (a[firstColumn] < b[firstColumn]) {
                return -1;
            } else if (a[firstColumn] > b[firstColumn]) {
                return 1;
            } else {
                return 0;
            }
        });

        // Display the sorted data
        document.getElementById('output').textContent = JSON.stringify(jsonSheet, null, 2);
    };

    reader.readAsArrayBuffer(file);
}
