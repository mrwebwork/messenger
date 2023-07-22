import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getUsers = async () => {
    const session = await getSession();

    if (!session?.user?.email) {
        return [];
    }

    try {
        //* Get all users except the current user
         const users = await prisma.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
            where: {
                NOT: {
                    email: session.user.email as string,
                }
            }
         });
         return users;
        
    } catch (error: any) {
        return [];
    }
}

export default getUsers;