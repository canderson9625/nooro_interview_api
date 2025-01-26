import express from "express/index.js";
import middleware from "./middleware/index.ts";
import prisma from "./prisma/index.ts";
import { Task } from "@prisma/client";
import process from "node:process";

const app = express();
const api = express();

api.get("/tasks", async (req, res, next) => {
    res.json({ tasks: await prisma.getTasks({ pageSize: -1 }) });
    next();
});

api.post("/tasks", async (req, res, next) => {
    res.json({
        message: "Task Created Successfully!",
        data: await prisma.createTask({ task: req.body as Task }),
    });
    next();
});

api.put("/tasks/:taskId", async (req, res, next) => {
    const task = await prisma.updateTask({
        id: Number(req.params.taskId) ?? -1,
        task: req.body,
    });
    res.json({
        message: task
            ? `Task: ${task.title} Updated Successfully!`
            : `Task not successfully updated.`,
        data: task,
    });
    next();
});

api.delete("/tasks/:taskId", async (req, res, next) => {
    const task = await prisma.deleteTask({
        id: Number(req.params.taskId) ?? -1,
    });
    res.json({
        message: task
            ? "Task Deleted Successfully!"
            : "Task not successfully deleted.",
        data: task,
    });
    next();
});

app.use(express.json(), ...middleware, api, (req, res, next) => {
    console.log("end");

    // further middleware
    // next()
});

const port = process?.env?.PORT ?? 6001;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
