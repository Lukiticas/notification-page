export interface notificationProps {
  username: string;
  types: {
    [key: string]: string;
  };
  notifications: notifications[];
}

export interface notifications {
  user: string;
  type: string;
  target: string | null;
  userIcon: string | null;
  PreviewImg: string | null;
  PreviewText: string | null;
  createdAt: number;
  read: boolean;
  id: number;
}

export default {
  username: "Lucas",
  types: {
    rp: "reaction to your recent post",
    rl: "reaction to your post",
    f: "followed you",
    jg: "has joined your group",
    pm: "sent you a private message",
    cp: "commented on your picture",
    lg: "left the group",
  },
  notifications: [
    {
      user: "Mark Webber",
      type: "rp",
      target: "My first tournament today!",
      userIcon: "./images/avatar-mark-webber.webp",
      PreviewImg: null,
      PreviewText: null,
      createdAt: 60,
      read: false,
      id: 1,
    },
    {
      user: "Angela Gray",
      type: "f",
      target: null,
      userIcon: "./images/avatar-angela-gray.webp",
      PreviewImg: null,
      PreviewText: null,
      createdAt: 300,
      read: false,
      id: 2,
    },
    {
      user: "Jacob Thompson",
      type: "jg",
      target: "Chess Club",
      userIcon: "./images/avatar-jacob-thompson.webp",
      PreviewImg: null,
      PreviewText: null,
      createdAt: 86400,
      read: false,
      id: 3,
    },
    {
      user: "Rizky Hasanuddin",
      type: "pm",
      target: null,
      userIcon: "./images/avatar-rizky-hasanuddin.webp",
      PreviewImg: null,
      PreviewText:
        "Hello, thanks for setting up the Chess Club, i've been a member for a few weeks now and i'm already having lots of fun and improving my game.",
      createdAt: 432000,
      read: false,
      id: 4,
    },
    {
      user: "Kimberly Smith",
      type: "cp",
      target: null,
      userIcon: "./images/avatar-kimberly-smith.webp",
      PreviewImg: "./images/image-chess.webp",
      PreviewText: null,
      createdAt: 604800,
      read: false,
      id: 5,
    },
    {
      user: "Nathan Peterson",
      type: "rp",
      target: "5 end-game strategies to increase your win rate",
      userIcon: "./images/avatar-nathan-peterson.webp",
      PreviewImg: null,
      PreviewText: null,
      createdAt: 1209600,
      read: false,
      id: 6,
    },
    {
      user: "Anna Kim",
      type: "lg",
      target: "Chess Club",
      userIcon: "./images/avatar-anna-kim.webp",
      PreviewImg: null,
      PreviewText: null,
      createdAt: 1209600,
      read: false,
      id: 7,
    },
  ],
} as notificationProps;
