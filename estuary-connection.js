var myHeaders = new Headers();
myHeaders.append("Content-Type", "multipart/form-data");
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer ESTc10d7c52-9794-4edd-880d-6f234a9a66dfARY");


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};


fetch("https://api.estuary.tech/content/add", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
