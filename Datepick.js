window.onload = function() {
    var lang = {
      title: 'custom title',
      cancel: 'Cancel',
       confirm: 'Confirm',
       year: ' year',
       month: 'month',
       day: 'day',
       hour: 'hour',
       min: 'minutes',
       sec: 'seconds'
  };

  // // Format

  new Rolldate({
      el: '#date-group1-4',
      format: 'YYYY-MM-DD hh:mm',
      beginYear: 1980,
      endYear: 2100,
      lang: lang
  })
  
}