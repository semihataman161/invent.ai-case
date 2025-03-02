import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Doe",
    },
  });

  const book1 = await prisma.book.create({
    data: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  });

  const book2 = await prisma.book.create({
    data: {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
  });

  const borrowedBook1 = await prisma.borrowedBook.create({
    data: {
      userId: user1.id,
      bookId: book1.id,
    },
  });

  const borrowedBook2 = await prisma.borrowedBook.create({
    data: {
      userId: user2.id,
      bookId: book2.id,
    },
  });

  await prisma.rating.create({
    data: {
      userId: user1.id,
      bookId: book1.id,
      score: 5,
    },
  });

  await prisma.rating.create({
    data: {
      userId: user2.id,
      bookId: book2.id,
      score: 4,
    },
  });

  console.log("Database has been seeded!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
