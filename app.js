const express = require('express');
const app = express();
const port = 8080;
app.use(express.static("MAIN"));
//app.get('/', (req, res) => res.send('THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS. NAME: DANIEL UGOCHUKWU EMELOGU. MATRIC. NO: VUG/CSC/21/6263'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
