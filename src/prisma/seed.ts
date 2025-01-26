import p from "@prisma/client";
import { Task } from "@prisma/client";

// i've declared prisma here for reuse in the main updateFn
const prisma = new p.PrismaClient();
const seedTasksLength = 10;

interface ISeedMain {
    updateFn?: () => Promise<any>;
}

// a function to seed the db using prisma client
async function main(props?: ISeedMain): Promise<Task[] | any> {
    const updateFn = props?.updateFn;

    try {
        const tasksFound = await prisma.task.findMany({
            where: {
                id: {
                    lte: seedTasksLength,
                },
            },
        });

        if (tasksFound?.length < seedTasksLength) {
            throw new Error("not all dev tasks retrieved");
        }

        return tasksFound;
    } catch {
        if (updateFn) {
            return updateFn();
        }

        // pick the required fields from task
        const data: Pick<Task, "id" | "title" | "color">[] = [];
        for (let i = 1; i <= seedTasksLength; i++) {
            // populate data array with dev tasks
            data.push({
                id: i,
                title: `Task ${i}`,
                color: "Red",
            });
        }

        const tasks = await prisma.task.createMany({ data });

        return tasks;
    }
}

const result = main({
    // Here is how an updateFn implementation might look
    // updateFn: async () => {
    //     const task = await prisma.task.update({
    //         where: {
    //             id: 1,
    //         },
    //         data: {
    //             // id: 10
    //             title: `Task 1`,
    //             // color: "Red"
    //         }
    //     })
    //     console.log(task)
    // }
})
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error("caught: ", e);
        await prisma.$disconnect();
        // process.exit(1)
        Deno.exit(1);
    });

// console.log(await result);
