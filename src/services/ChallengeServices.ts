import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTodaysChallenge = async () => {
  const date = new Date();
  const day_of_year = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );

  // Calculate a desired index based on the current day of the year and the total number of challenges
  const total_challenges = await prisma.challenge.count();
  const desired_position = day_of_year % total_challenges;

  // Get all the challenges in order of id, select the one at the calculated index to use
  const challenges = await prisma.challenge.findMany({
    orderBy: { id: "asc" },
  });
  return challenges[desired_position];
};

export default getTodaysChallenge;
