import { z } from "zod";

enum RoleEnum {
  ADMIN = "Administrator",
  BASIC = "LLO Membership",
  CORPORATE = "LLO Membership Corporate",
  PREMIUM = "LLO Membership Pro",
}

export const Role = z.nativeEnum(RoleEnum);
export type Role = z.infer<typeof Role>;

export const getRolesVisibleBy = (roles: string[]) => {
  return roles.map((role) => getRoleVisibleBy(role));
};

export const getRoleVisibleBy = (role: string) => {
  return `roles/${role}`;
};
