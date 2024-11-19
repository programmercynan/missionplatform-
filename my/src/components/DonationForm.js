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

    return (
        <div>
            <h2>Make a Donation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Donation Amount:
                    <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                    />
                </label>

                <button type="submit">Donate</button>

            </form>
        </div>
    );
};

export default DonationForm;