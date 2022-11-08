import { hash } from "bcryptjs";
import { prisma } from ".";

const main = async (): Promise<void> => {
  const passwordHash = await hash("125667", 12);

  const teste = await prisma.user.upsert({
    where: { email: "teste@gmail.com" },
    update: {},
    create: {
      name: "Teste GO",
      email: "teste@gmail.com",
      password: passwordHash,
    },
  });

  console.log({ teste });
};

main()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
