import { validate as isUuid } from "uuid";

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (!isUuid(user_id)) {
      throw new Error("User does not exists!2");
    }
    if (!user) {
      throw new Error("User does not exists!");
    }

    if (!user.admin) {
      throw new Error("User is not admin!");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
