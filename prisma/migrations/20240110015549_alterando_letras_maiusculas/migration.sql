-- DropForeignKey
ALTER TABLE "Cifra" DROP CONSTRAINT "Cifra_userId_fkey";

-- AddForeignKey
ALTER TABLE "Cifra" ADD CONSTRAINT "Cifra_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
