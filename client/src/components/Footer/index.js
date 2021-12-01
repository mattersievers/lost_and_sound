import React, {useEffect} from "react";
import { loadStripe } from '@stripe/stripe-js';
import Auth from '../../utils/auth';
import { useLazyQuery } from '@apollo/client';
import { DONATE } from '../../utils/queries'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function Footer() {
    const [getDonation, { data }] = useLazyQuery(DONATE);

    const submitDonation = (event) =>{
        event.preventDefault();
        const getAmount = event.target.donation.value;
        console.log(parseInt(getAmount))
        getDonation({
            variables: {amount: parseInt(getAmount)}
        });
    }
      
    useEffect( () => {
        if(data) {
            stripePromise.then( (res) => {
                res.redirectToCheckout({ sessionId: data.donate.session });
            });
        }
    }, [data]);
   
    return(
        <form onSubmit={submitDonation}>
            {
                Auth.loggedIn() ?
                    <>
                        <label htmlFor="donation">Help us keep groovin by givin a few dollars:</label>
                        <input name="donation" type="number" id="donation" />
                        <button type="submit">
                            Donate
                        </button>
                    </>
                    :
                    <span>Log In To Make A Donation</span>
            }
        </form>
    )
}

export default Footer;