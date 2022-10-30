"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const post1 = await prisma.task.upsert({
        where: { title: 'Prisma Adds Support for MongoDB' },
        update: {},
        create: {
            title: 'Prisma Adds Support for MongoDB',
            description: "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
        },
    });
    const post2 = await prisma.task.upsert({
        where: { title: "What's new in Prisma? (Q1/22)" },
        update: {},
        create: {
            title: "What's new in Prisma? (Q1/22)",
            description: 'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
        },
    });
    console.log({ post1, post2 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map