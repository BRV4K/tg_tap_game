//@ts-nocheck

import './ToastInfo.scss'
import toast from "react-hot-toast";
import ToastInfoIcon from './ToastInfoIcon/ToastInfoIcon';

function ToastInfo(text, remove = false) {

    if (remove) {
        toast.remove();
    }

    toast.success(text, {
        className: 'toast-info-container d-flex justify-content-center align-items-center',
        icon: <ToastInfoIcon />
    })
}

export default ToastInfo