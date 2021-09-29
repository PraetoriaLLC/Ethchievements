-- CreateTable
CREATE TABLE "Questline" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "integrationId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Questline.name_unique" ON "Questline"("name");
