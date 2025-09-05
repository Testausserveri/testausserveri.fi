import GithubIcon from "@/assets/GithubIcon.svg";
import InstagramIcon from "@/assets/InstagramIcon.svg";
import YoutubeIcon from "@/assets/YoutubeIcon.svg";
import TwitterIcon from "@/assets/TwitterIcon.svg";

export const SOCIAL_MEDIA_LINKS = [
  {
    icon: InstagramIcon,
    name: "Instagram",
    url: "https://instagram.com/testausserveri",
  },
  {
    icon: YoutubeIcon,
    name: "Youtube",
    url: "https://youtube.com/@testausserveri",
  },
  {
    icon: GithubIcon,
    name: "GitHub",
    url: "https://github.com/Testausserveri",
  },
  {
    icon: TwitterIcon,
    name: "Twitter",
    url: "https://twitter.com/testausserveri",
  },
] as const;
