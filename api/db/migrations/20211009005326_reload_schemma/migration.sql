-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "authDetailId" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthDetail" (
    "id" TEXT NOT NULL,
    "nonce" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Integration" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "baseUrl" TEXT NOT NULL,
    "infoUrl" TEXT,
    "promoAchievementId" INTEGER,
    "color" TEXT NOT NULL,
    "secondaryColor" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questline" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "integrationId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "integrationId" INTEGER NOT NULL,
    "questlineId" INTEGER,
    "description" TEXT NOT NULL,
    "actionUrl" TEXT,
    "score" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EarnedAchievement" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "achievementId" INTEGER NOT NULL,
    "awardedAt" TIMESTAMP(3) NOT NULL,
    "mintedAt" TIMESTAMP(3),
    "isRare" BOOLEAN,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.address_unique" ON "User"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_authDetailId_unique" ON "User"("authDetailId");

-- CreateIndex
CREATE UNIQUE INDEX "Integration.name_unique" ON "Integration"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Questline.name_unique" ON "Questline"("name");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("authDetailId") REFERENCES "AuthDetail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
