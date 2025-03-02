import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: { name: "Alice Johnson" },
  });

  const user2 = await prisma.user.create({
    data: { name: "Bob Smith" },
  });

  const book1 = await prisma.book.create({
    data: {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      year: 1999,
    },
  });

  const book2 = await prisma.book.create({
    data: { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  });

  await prisma.borrowing.createMany({
    data: [
      { userId: user1.id, bookId: book1.id, borrowedAt: new Date() },
      {
        userId: user1.id,
        bookId: book2.id,
        borrowedAt: new Date(),
        returnedAt: new Date(),
      },
      {
        userId: user2.id,
        bookId: book2.id,
        borrowedAt: new Date(),
        returnedAt: new Date(),
      },
    ],
  });

  await prisma.rating.createMany({
    data: [
      { userId: user1.id, bookId: book2.id, score: 9 },
      { userId: user2.id, bookId: book2.id, score: 7 },
    ],
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
