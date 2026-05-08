function baSubmit() {

    if (!document.getElementById('title').value) {
        alert('Please select a title.');
        return false;
    }

    if (!document.getElementById('full_name').value.trim()) {
        alert('Please enter your full name.');
        return false;
    }

    if (!document.getElementById('dob').value) {
        alert('Please enter your date of birth.');
        return false;
    }

    if (!document.getElementById('id_number').value.trim()) {
        alert('Please enter your ID or passport number.');
        return false;
    }

    if (!document.getElementById('phone').value.trim()) {
        alert('Please enter your phone number.');
        return false;
    }

    if (!document.getElementById('email').value.includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!document.getElementById('address').value.trim()) {
        alert('Please enter your residential address.');
        return false;
    }

    if (!document.getElementById('income').value) {
        alert('Please enter your monthly income.');
        return false;
    }

    if (!document.getElementById('upload_id').files.length) {
        alert('Please upload your identity document.');
        return false;
    }

    if (!document.getElementById('upload_residence').files.length) {
        alert('Please upload your proof of residence.');
        return false;
    }

    alert('Application submitted successfully!');
    return true;
}




// Star rating logic
document.addEventListener('DOMContentLoaded', function () {
    var stars = document.querySelectorAll('.fb-star');
    if (!stars.length) return;

    stars.forEach(function (star) {
        star.addEventListener('click', function () {
            var val = this.getAttribute('data-val');
            document.getElementById('fb-rating-val').value = val;

            stars.forEach(function (s) {
                if (s.getAttribute('data-val') <= val) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});

function fbSubmit() {

    if (!document.getElementById('fb-name').value.trim()) {
        alert('Please enter your full name.');
        return false;
    }

    if (!document.getElementById('fb-email').value.trim().includes('@')) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!document.getElementById('fb-branch').value) {
        alert('Please select a branch.');
        return false;
    }

    if (!document.getElementById('fb-rating-val').value) {
        alert('Please select a star rating.');
        return false;
    }

    if (!document.getElementById('fb-category').value) {
        alert('Please select a feedback category.');
        return false;
    }

    if (!document.getElementById('fb-message').value.trim()) {
        alert('Please enter your message.');
        return false;
    }

    if (!document.getElementById('fb-contact-consent').checked) {
        alert('Please agree to be contacted regarding your feedback.');
        return false;
    }

    document.getElementById('feedbackForm').style.display = 'none';
    document.getElementById('fb-success').classList.add('active');
    alert('Feedback submitted successfully!');
    return true;
}







// Account dashboard

function switchTab(tabId, btn) {
    document.querySelectorAll('.dash-panel').forEach(function (p) {
        p.classList.remove('active');
    });
    document.querySelectorAll('.dash-tab').forEach(function (b) {
        b.classList.remove('active');
    });
    document.getElementById('tab-' + tabId).classList.add('active');
    btn.classList.add('active');
}

function toggleNotifications() {
    var panel = document.getElementById('dashNotifPanel');
    panel.classList.toggle('open');
}

document.addEventListener('click', function (e) {
    var wrap = document.querySelector('.dash-bell-wrap');
    if (wrap && !wrap.contains(e.target)) {
        document.getElementById('dashNotifPanel').classList.remove('open');
    }
});

function updateCard(radio) {
    document.getElementById('dashCardType').textContent =
        radio.value.charAt(0).toUpperCase() + radio.value.slice(1);
}

function payValidate() {
    if (!document.getElementById('pay-holder').value.trim()) {
        alert('Please enter the account holder name.');
        return false;
    }
    if (!document.getElementById('pay-accnum').value.trim()) {
        alert('Please enter the account number.');
        return false;
    }
    if (!document.getElementById('pay-branch').value.trim()) {
        alert('Please enter the branch number.');
        return false;
    }
    if (!document.getElementById('pay-amount').value || document.getElementById('pay-amount').value <= 0) {
        alert('Please enter a valid amount.');
        return false;
    }
    if (!document.getElementById('pay-ref').value.trim()) {
        alert('Please enter a payment reference.');
        return false;
    }
    alert('Payment submitted successfully!');
    return true;
}


// Loan page

function loanSwitchTab(tabId, btn) {
    document.querySelectorAll('.loan-panel').forEach(function (p) {
        p.classList.remove('active');
    });
    document.querySelectorAll('.SecondaryNav .btnss').forEach(function (b) {
        b.classList.remove('active');
    });
    document.getElementById('loan-tab-' + tabId).classList.add('active');
    btn.classList.add('active');
}

function loanValidate(type) {

    if (type === 'personal') {

        if (!document.getElementById('pl-name').value.trim()) {
            alert('Please enter your full name.');
            return false;
        }
        if (!document.getElementById('pl-amount').value || document.getElementById('pl-amount').value <= 0) {
            alert('Please enter a valid loan amount.');
            return false;
        }
        if (!document.getElementById('pl-purpose').value.trim()) {
            alert('Please describe the purpose of your loan.');
            return false;
        }
        if (!document.getElementById('pl-employed').checked) {
            alert('You must be currently employed to apply.');
            return false;
        }
        if (!document.getElementById('pl-account').checked) {
            alert('You must hold an active Pula Bank account to apply.');
            return false;
        }
        if (!document.getElementById('pl-terms').checked) {
            alert('Please agree to the terms and conditions.');
            return false;
        }

    } else {

        if (!document.getElementById('bl-name').value.trim()) {
            alert('Please enter your business name.');
            return false;
        }
        if (!document.getElementById('bl-reg').value.trim()) {
            alert('Please enter your business registration number.');
            return false;
        }
        if (!document.getElementById('bl-amount').value || document.getElementById('bl-amount').value <= 0) {
            alert('Please enter a valid loan amount.');
            return false;
        }
        if (!document.getElementById('bl-purpose').value.trim()) {
            alert('Please describe the purpose of your loan.');
            return false;
        }
        if (!document.getElementById('bl-registered').checked) {
            alert('Your business must be registered in Botswana to apply.');
            return false;
        }
        if (!document.getElementById('bl-account').checked) {
            alert('You must hold an active Pula Bank business account to apply.');
            return false;
        }
        if (!document.getElementById('bl-terms').checked) {
            alert('Please agree to the terms and conditions.');
            return false;
        }
    }

    alert('Loan application submitted successfully!');
    return true;
}



