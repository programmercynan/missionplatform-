import React from 'react';
/** 
 * PrayerRequestForm Component
 * collects prayer requests from users
 */

const PrayerRequestForm = () => {
    // state to manage form input
    const [prayerRequest, setPrayerRequest] = useState('');

    // form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Your prayer request has been submitted: "${prayerRequest}"`);
        setPrayerRequest(''); // reset form submission
    };

    return (
        <div>
            <h2>Submit a Prayer Request</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Prayer Request:
                    <textarea
                    value={prayerRequest}
                    onChange={(e) => setPrayerRequest(e.target.value)}
                    placeholder="Type your prayer request here"
                    required
                    />
                </label>

                <button type="submit">Submit</button>

            </form>
        </div>
    );

};

export default PrayerRequestForm;