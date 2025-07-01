-- AlterTable
ALTER TABLE "mmwesayit" ADD COLUMN     "brand" TEXT,
ADD COLUMN     "model" TEXT,
ADD COLUMN     "year" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "twoFactorCode" TEXT,
ADD COLUMN     "twoFactorCodeExpires" TIMESTAMP(3);
