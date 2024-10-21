'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastContainerWrapper() {
  return <ToastContainer autoClose={1000} position={toast.POSITION.TOP_RIGHT} />;
}
