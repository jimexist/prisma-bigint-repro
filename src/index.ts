import console from 'node:console'

import { PrismaClient } from './generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany({
    where: {
      id: {
        gte: 1,
      },
    },
    take: 100,
  })
  console.log(users)
}

main()
