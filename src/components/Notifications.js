import React, { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { resetNotification } from '../redux/actions';
// Notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = ({ message }) => {
    // variables
    let dispatch = useDispatch();
    //Functions
    const notify = (message) => {
        const myToast = message.success ? toast.success : toast.error;
        myToast(message.description, {
            onClose: () => dispatch(resetNotification())
        });
    }
    // Effect
    useEffect(() => {
        message && notify(message);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message])

    return (
        <div>
            <ToastContainer />
        </div>
    )
}

export default Notifications
