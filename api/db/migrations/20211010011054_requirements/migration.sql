-- CreateTable
CREATE TABLE "Requirement" (
    "achievementId" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "signature" TEXT NOT NULL,

    PRIMARY KEY ("achievementId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Requirement.achievementId_unique" ON "Requirement"("achievementId");
