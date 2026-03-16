function updateCard() {
    const input = document.getElementById('nameInput').value;
    document.getElementById('outputName').innerText = input ? input : "আপনার নাম";
}

function downloadImage() {
    const card = document.getElementById('cardCanvas');
    html2canvas(card, { scale: 3, backgroundColor: '#0a0f16' }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Eid_Elite_Card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

let income = 0;
let expense = 0;
function calcSalami(type) {
    const amt = parseInt(document.getElementById('salamiAmt').value);
    if (!amt) return;
    if (type === 'in') {
        income += amt;
        document.getElementById('totalIn').innerText = '৳ ' + income;
    } else {
        expense += amt;
        document.getElementById('totalOut').innerText = '৳ ' + expense;
    }
    document.getElementById('salamiAmt').value = '';
}
