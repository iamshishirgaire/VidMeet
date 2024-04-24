import {
  CalendarIcon,
  HistoryIcon,
  HomeIcon,
  PlusIcon,
  User2Icon,
  UserIcon,
  VideoIcon,
} from "lucide-react";

export const sidebarLinks = [
  {
    imgURL: HomeIcon,
    route: "/home",
    label: "Home",
  },

  {
    imgURL: CalendarIcon,
    route: "/upcoming",
    label: "Upcoming",
  },
  {
    imgURL: HistoryIcon,
    route: "/previous",
    label: "Previous",
  },
  {
    imgURL: VideoIcon,
    route: "/recordings",
    label: "Recordings",
  },
  {
    imgURL: UserIcon,
    route: "/personal-room",
    label: "Personal Room",
  },
];

export const avatarImages = [
  "/images/avatar-1.jpeg",
  "/images/avatar-2.jpeg",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
  "/images/avatar-5.png",
];
