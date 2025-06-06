import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  cover: z.any().refine((file) => file instanceof FileList && file.length > 0, {
    message: "Cover photo is required",
  }),
});
