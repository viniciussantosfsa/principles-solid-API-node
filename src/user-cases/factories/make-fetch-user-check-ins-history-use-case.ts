/* eslint-disable prettier/prettier */
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repo'
import { FetchUserCheckInsHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const fetchUserCheckInsHistory = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

  return fetchUserCheckInsHistory
}