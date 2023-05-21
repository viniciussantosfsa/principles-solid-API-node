/* eslint-disable prettier/prettier */
import { prisma } from '../../lib/prisma' // TODO FIX ME!!
import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repo'

export class PrismaUsersRepository implements UsersRepository {
 async findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.')
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data })
    return user 
  }
}