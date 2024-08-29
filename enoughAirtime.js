function enoughAirtime(usage, availableAirtime) {
    const costPerCall = 1.88;
    const costPerData = 12.00;
    const costPerSMS = 0.75;

    const usages = usage.split(',');

    let totalCost = 0;
    usages.forEach(item => {
        if (item === 'call') {
            totalCost += costPerCall;
        } else if (item === 'data') {
            totalCost += costPerData;
        } else if (item === 'sms') {
            totalCost += costPerSMS;
        }
    });

    let remainingAirtime = availableAirtime - totalCost;

    if (remainingAirtime < 0) {
        return 'R0.00';
    } else {
        return 'R' + remainingAirtime.toFixed(2);
    }
} 