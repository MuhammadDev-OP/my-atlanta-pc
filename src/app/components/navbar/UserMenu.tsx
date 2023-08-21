"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import RegisterModal from "../modals/RegisterModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import Avatar from "../Avatar";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  return (
    <div className="relative">
      <div
        className="
            items-center
            flex
            flex-row gap-3"
      >
        <div
          onClick={rentModal.onOpen}
          className="
          hidden
          md:block
            py-3
            px-4
            font-semibold
            text-sm
            rounded-full
            hover:bg-neutral-100
            cursor-pointer
            transition"
        >
          AirAtlanta Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="
        flex
        flex-row
        py-2
        px-2
        cursor-pointer
        gap-3
        border-[2px]
        border-neutral-200
        rounded-full
        items-center
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={undefined} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
        absolute
        rounded-xl
        py-2
        drop-shadow-md 
        w-[40vw]
        md:w-3/4
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        
        
        "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="My Trips"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="My Favorites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="My Reservations"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label="My Properties"
                />
                <MenuItem onClick={() => {}} label="AirAtlanta My Spot" />
                <hr />
                <MenuItem onClick={() => signOut()} label="logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="LogIn" />
                <MenuItem onClick={registerModal.onOpen} label="SignUp" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
