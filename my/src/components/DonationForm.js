import React from 'react';
/** 
 * DonationForm Component
 * Allows users to submit a donation with their chosen amount.
 */

const DonationForm = () => {
    // state to manage form input
    const [amount, setAmount] = useState('');

    // form submission handler 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for donating $${amount}!`);
        setAmount(''); // reset form submission
    };
}