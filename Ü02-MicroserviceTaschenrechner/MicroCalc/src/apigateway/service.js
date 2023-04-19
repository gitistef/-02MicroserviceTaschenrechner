const express = require('express');
const app = express();
const axios = require('axios');

//Portnummern
port_add = 3001;
port_sub = 3002;
port_mul = 3003;
port_div = 3004;

app.get('/add/:num1/:num2', async (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
  
    await makeHTTPRequestToService(port_add, "", num1, num2, res);
});

app.get('/sub/:num1/:num2', async (req, res) => {
  const num1 = req.params.num1;
  const num2 = req.params.num2;

  await makeHTTPRequestToService(port_sub, "", num1, num2, res);
});

app.get('/mul/:num1/:num2', async (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
  
    await makeHTTPRequestToService(port_mul, "", num1, num2, res);
});

app.get('/div/:num1/:num2', async (req, res) => {
    const num1 = req.params.num1;
    const num2 = req.params.num2;
  
    await makeHTTPRequestToService(port_div, "", num1, num2, res);
  });

app.get ('/', (req, res)=>{
    html = `<h1> API Gateway ist Listening </h1>
            <div>Addieren: Port <a href="http://localhost:${port_add}" target="_blank">${port_add}</a></div>
            <div>Subtrahieren: Port <a href="http://localhost:${port_sub}" target="_blank">${port_sub}</a></div>
            <div>Multiplizieren: Port <a href="http://localhost:${port_mul}" target="_blank">${port_mul}</a></div>
            <div>Dividieren: Port <a href="http://localhost:${port_div}" target="_blank">${port_div}</a></div>
    `
    res.send(html);
})

app.listen(3000, () => {
    console.log('API Gateway started on port 3000');
  });

async function makeHTTPRequestToService(port, service, num1, num2, res) {
    try {
        let result = ""
        if(service==""){
            result = await axios.get(`http://localhost:${port}/${num1}/${num2}`);
        }
        else{
            result = await axios.get(`http://localhost:${port}/${service}/${num1}/${num2}`);
        }
        res.send(result.data);
    } catch (error) {
        res.send({ error: error.message });
    }
}
