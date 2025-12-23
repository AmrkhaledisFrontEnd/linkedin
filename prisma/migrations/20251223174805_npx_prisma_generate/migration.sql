/*
  Warnings:

  - You are about to drop the column `jop` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "jop",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "headline" TEXT,
ADD COLUMN     "school" TEXT;
