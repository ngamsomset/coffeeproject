/** @format */

'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast';
import { useToast } from './use-toast'; 

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="absolute max-w-full">
      <ToastProvider>
        {toasts.map(function ({
          id,
          title,
          description,
          action,
          duration,
          ...props
        }) {
          return (
            <Toast key={id} {...props} className='bg-[#36402D] text-white'>
              <div className="flex flex-col w-full ">
                <div className="flex justify-start items-center w-full p-2 gap-2 mr-4 ">
                  <div className="grid gap-1">
                    {title && <ToastTitle>{title}</ToastTitle>}
                    {description && (
                      <ToastDescription>{description}</ToastDescription>
                    )}
                  </div>
                  {action}
                </div>
                <ToastClose />
                {/* <TimerBar max={duration || TOAST_REMOVE_DELAY} /> */}
              </div>
            </Toast>
          );
        })}
        <ToastViewport />
      </ToastProvider>
    </div>
  );
}