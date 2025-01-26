import p, { PrismaClient, PrismaPromise, Task } from "@prisma/client";

interface ITasksPrismaClient {
    prisma: PrismaClient;
    abrv: () => this["prisma"]["task"]; // abbreviation for TasksPrismaClient.prisma.task
    getTasks: (props: IGetTasks) => Promise<Task[] | []>;
    createTask: (props: ICreateTask) => Promise<Task | false>;
    updateTask: (props: IUpdateTask) => Promise<Task | false>;
    deleteTask: (props: IDeleteTask) => Promise<boolean>;
}

interface IGetTasks {
    pageSize: number;
}

interface ICreateTask {
    task: Task;
}

interface IUpdateTask {
    id: number;
    task: Task;
}

interface IDeleteTask {
    id: number;
}

// Abstractions for the API
const TasksPrismaClient: ITasksPrismaClient = {
    prisma: new p.PrismaClient(),
    abrv: () => TasksPrismaClient.prisma.task,
    getTasks: async (props: IGetTasks) => {
        const { pageSize } = props;

        return tpc.findMany({
            // where clause could be further abstracted and granualized into the interface
            where: {
                id: pageSize === -1 ? undefined : {
                    lte: pageSize,
                },
            },
        });
    },
    createTask: async (props: ICreateTask) => {
        const { task } = props;
        try {
            const result = tpc.create({
                data: task,
            });
            return result;
        } catch {
            return false;
        }
    },
    updateTask: async (props: IUpdateTask) => {
        const { id, task } = props;
        try {
            const result = tpc.update({
                where: {
                    id,
                },
                data: task,
            });

            return result;
        } catch {
            return false;
        }
    },
    deleteTask: async (props: IDeleteTask) => {
        const { id } = props;
        try {
            const _result = tpc.delete({
                where: {
                    id,
                },
            });

            return true;
        } catch {
            return false;
        }
    },
};
const tpc = TasksPrismaClient.abrv();

// console.log(await TasksPrismaClient.getTasks({pageSize: 10}))

export default TasksPrismaClient;
