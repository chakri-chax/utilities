// less secure app permission for email 
// https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4OOwGR8hNM0AUpMX6QFivo8Rw5KAxttLySvIW1WTvOydLBh_v9AS1vK_0VIX6QoZn2UPMC5tCsutWA4Czx6EDg-NQ9ivw
const  sendMailFun=()=>{

  var nodemailer = require('nodemailer');
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'n180491@rguktn.ac.in',
      pass: 'Chax@143'
    }
  });
  
  var mailOptions = {
    from: 'n180491@rguktn.ac.in',
    to: 'lovachakravarthi@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Hi Smartherd, thank you for your nice Node.js tutorials.
            I will donate 50$ for this course. Please send me payment options.`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

    
  });}
  
sendMailFun();
