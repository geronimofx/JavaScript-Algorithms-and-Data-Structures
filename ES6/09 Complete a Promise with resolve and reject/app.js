const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa uma resposta de um servidor
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");  // Altere esta linha
    } else {
        reject("Data not received");  // Altere esta linha
    }
});