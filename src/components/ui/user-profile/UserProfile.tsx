"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const UserProfile = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { data: session } = useSession();
  const popupRef = useRef<any>(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = (e: React.MouseEvent) => {
    if (popupRef.current && popupRef.current.contains(e.target as Node)) {
        return;
      }
    setIsPopupOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', closePopup as any);

    return () => {
      document.removeEventListener('click', closePopup as any);
    };
  }, []);

  return (
    <div className="absolute top-0 right-[32px] h-[32px]" ref={popupRef}>
      <div className="flex items-center pointer cursor-pointer">
        <div className="mr-4">
          <p className="text-black font-bold">{session?.user?.name}</p>
        </div>
        <div onClick={togglePopup}>
          <Image width={50} height={50} src={'/avatar.png'} alt={'avatar'} />
        </div>
      </div>

      {isPopupOpen && (
        <div className="absolute top-10 right-0 bg-white border-gray-300 hover:bg-red-500 rounded shadow">
          {/* Здесь ваша кнопка Logout */}
          <button
            // onClick={onLogout}
            className="text-black font-bold py-2 px-4 rounded cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
  
