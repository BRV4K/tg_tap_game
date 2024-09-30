//@ts-nocheck

import { toast } from 'react-hot-toast';

export const toastSuccess = (toastText: string, toastParams: object) => {
  toast.remove();
  toast.success(toastText, toastParams)
}