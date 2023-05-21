/* eslint-disable prettier/prettier */
import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repo'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  async findById(id: string) {
    const user = this.items.find((item: { id: string }) => item.id === id )
    if (!user) {
      return null
    }
    return user
  }
  
  async findByEmail(email: string) {
    const user = this.items.find((item: { email: string }) => item.email === email)
    if (!user) {
      return null
    }
    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user-1',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      create_at: new Date(),
    }
    this.items.push(user)

    return user
  }
}