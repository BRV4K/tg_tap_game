//@ts-nocheck

import './ToastStatus.scss'
import toast from "react-hot-toast";
import ToastStatusIcon from './ToastStatusIcon/ToastStatusIcon';

function ToastStatus(text, remove = false) {
    
    if(remove) {
        toast.remove();
    }

    toast.success(text, {
        className: 'toast-status-container d-flex justify-content-center align-items-center',
        icon: <ToastStatusIcon/>,
    })
}

export default ToastStatus