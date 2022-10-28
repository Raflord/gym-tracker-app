import Image from "next/image";
import AvatarPlaceholder from "../assets/images/avatar-placeholder.png";
import Popover from "./Popover";

interface IProps {
  avatarUrl: string | null | undefined;
  signOutFn: () => void;
}

const Navbar = ({ avatarUrl, signOutFn }: IProps) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex">
        <Image
          src={avatarUrl || AvatarPlaceholder}
          alt="Profile picture"
          width={65}
          height={65}
          className="rounded-full"
        />
      </div>
      <div className="text-lg font-bold">Gym Tracker</div>
      <Popover avatarUrl={null} signOutFn={signOutFn} />
    </div>
  );
};

export default Navbar;
