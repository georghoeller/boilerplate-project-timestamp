const dateUTC = '2015-12-25';


  var dateToUnix_ = Date.parse(dateUTC);
  var dateToUtc_ = new Date(dateUTC).toUTCString();
  
  console.log('date',dateUTC)
  console.log('dateToUnix',dateToUnix_)
  console.log('dateToUtc',dateToUtc_)
  
  
  
  const dateUNIX = 1451001600000;
  var dateToUnix = new Date(dateUNIX);
  var dateToUtc = new Date(dateUNIX).toUTCString();

  console.log('date',dateUNIX)
  console.log('next dateToUnix',dateToUnix)
  console.log('next dateToUtc',dateToUtc)
