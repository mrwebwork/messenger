"use client";

import { User, Conversation } from "@prisma/client";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: Conversation & {
    users: User[];
  };
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  return (
    <div>
      <div>Profile Drawer</div>
    </div>
  );
};

export default ProfileDrawer;
