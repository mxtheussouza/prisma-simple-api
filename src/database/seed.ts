import { hash } from "bcryptjs";
import { prisma } from ".";

const main = async (): Promise<void> => {
  const passwordHash = await hash("88882788a", 12);

  const user = await prisma.user.upsert({
    where: { email: "prisma@gmail.com" },
    update: {},
    create: {
      name: "User Test",
      email: "prisma@gmail.com",
      password: passwordHash,
    },
  });

  console.log({ user });
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
