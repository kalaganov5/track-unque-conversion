var setReachGoals = function (conversionName) {
    var today = new Date();
    var eventExpiresDate = new Date(new Date().setHours(new Date().getHours() + 24)); // today + 24 hours
    var currentReachGoal = JSON.parse(localStorage.getItem("reachGoals"));

    // check localStorage on reachGoals
    if (currentReachGoal === null) {
      var events = {};
      // write in object event name and current time
      events[conversionName] = eventExpiresDate;
      // set current object in localStorage
      localStorage.setItem("reachGoals", JSON.stringify(events));
      // send event in pixel
      fbq('trackCustom', 'PurchaseOnlineSuccess'); // EXAMPLE
    } else if (today > new Date(currentReachGoal[conversionName]) || [conversionName] in currentReachGoal === false) {
      // if localStorage reachGoals conversionName expires
      // Взять текущие данные
      currentReachGoal[conversionName] = eventExpiresDate;
      // удалить текущие данные
      localStorage.removeItem("reachGoals");
      localStorage.setItem("reachGoals", JSON.stringify(currentReachGoal));
      // отправить событие
      fbq('trackCustom', 'PurchaseOnlineSuccess'); // EXAMPLE
    }
  };
setReachGoals('purchase-online-success'); // purchase-online-success - передавайте ваше название цели
