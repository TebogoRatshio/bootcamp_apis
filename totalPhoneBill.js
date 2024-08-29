function totalPhoneBill(data) {
    const costPerCall = 2.75;
    const costPerSms = 0.65;
    const items = data.split(', ');

    let calls = 0;
    let sms = 0;

    items.forEach(item => {
        if (item === 'call') {
            calls++;
        } else if (item === 'sms') {
            sms++;
        }
    });

    let total = calls * costPerCall + sms * costPerSms;

    return 'R' + total.toFixed(2);
}

const bill = totalPhoneBill('call, sms, call, sms, sms');
console.log(bill);
