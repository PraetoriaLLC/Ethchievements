-- CreateTable
CREATE TABLE "Integration" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "baseUrl" TEXT NOT NULL,
    "infoPath" TEXT,
    "promoAchievementId" TEXT,
    "color" TEXT NOT NULL,
    "secondaryColor" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Integration.name_unique" ON "Integration"("name");
