import React from 'react';

// 'message' নামে একটি নতুন prop যোগ করা হলো
const Alert = ({ showAlert, setShowAlert, message }) => { 
  return (
    showAlert && (
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg min-w-[300px] relative">
          <div className="flex items-center justify-between">
            {/* 👇 স্ট্যাটিক লেখার বদলে {message} prop ব্যবহার করা হলো */}
            <span>{message}</span> 
            
            <button onClick={() => setShowAlert(false)} className="text-white text-xl">✕</button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-300">
            <div className="h-full bg-green-800 w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default Alert;