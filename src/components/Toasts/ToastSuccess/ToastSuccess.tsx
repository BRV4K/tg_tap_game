//@ts-nocheck
import './ToastSuccess.scss'
import toast from "react-hot-toast";
import ToastSuccessIcon from './ToastSuccessIcon/ToastSuccessIcon';

function ToastSuccess(text, remove = false) {

    if (remove) {
        toast.remove();
    }

    return (
        toast.success(text, {
            className: 'toast-success-container d-flex justify-content-center align-items-center',
            icon: <ToastSuccessIcon/>,
        })
    )
}

export default ToastSuccess