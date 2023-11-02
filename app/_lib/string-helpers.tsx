import { User } from "../../types/user";

type UserName = {
    first_name?: User['first_name'] | null;
    last_name?: User['last_name'] | null;
  };

  
export const getFirstAndLastNames = (user: UserName): {first_name: string; last_name: string} => {
    const {first_name = ``, last_name = ``} = user;
  
    return {first_name: first_name === null ? `` : first_name, last_name: last_name === null ? `` : last_name};
  };
  
  export const getFullName = (user: UserName) => {
    const {first_name, last_name} = getFirstAndLastNames(user);
  
    return `${first_name} ${last_name}`;
  };
  