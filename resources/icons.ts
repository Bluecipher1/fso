import { IconType } from "react-icons";

import {
  PiHouseDuotone,
  PiCalendarDuotone,
  PiMusicNotesDuotone,
  PiUsersThreeDuotone,
  PiUserCircleDuotone,
  PiEnvelopeDuotone,
  PiArrowRightDuotone,
} from "react-icons/pi";

export const iconLibrary: Record<string, IconType> = {
  home: PiHouseDuotone,
  calendar: PiCalendarDuotone,
  music: PiMusicNotesDuotone,
  group: PiUsersThreeDuotone,
  person: PiUserCircleDuotone,
  email: PiEnvelopeDuotone,
  arrowRight: PiArrowRightDuotone,
};

export type IconName = keyof typeof iconLibrary;
