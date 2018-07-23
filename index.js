const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options
app.use(fileUpload());
 
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  //console.log(req.files);
  for(let fileo of req.files.foo){
    let name=fileo.name; 
    fileo.mv('./uploaded_files/'+name,function(err){
        if (err)
            return res.status(500).send(err);
      });
  }
  res.send('File uploaded!');
});
app.listen(3000,()=>{
    console.log('server started on port 3000');
});