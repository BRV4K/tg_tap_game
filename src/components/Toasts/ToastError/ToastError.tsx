//@ts-nocheck

import './ToastError.scss'
import toast from "react-hot-toast";
import ToastErrorIcon from './ToastErrorIcon/ToastErrorIcon';

function ToastError(text, remove = false) {

    if(remove) {
        toast.remove();
    }

    toast.error(text, {
        className: 'toast-error-container d-flex justify-content-center align-items-center',
        icon: <ToastErrorIcon/>
    })
}

export default ToastError