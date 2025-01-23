"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "./utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";
import { image } from "@uiw/react-md-editor";

export const createPitch = async (state: any, form: FormData, pitch: string) => {
    const session = await auth();
    if (!session) {
        return parseServerActionResponse({ status: "ERROR", error: "Not signed in" });
    }
    const {title, description, category, link} = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== "pitch")
    );

    const slug = slugify(title as string, { lower: true, strict: true });

    try {
        const startup = {
            title,
            description,
            category,
            image: link,
            pitch,
            slug: {
                _type: slug,
                current: slug
            },
            author: {
                _type: "reference",
                _ref: session?.id
            }
        }
        const result = await writeClient.create({
            _type: "startup",
            ...startup
        });
        return parseServerActionResponse({ 
            status: "SUCCESS", 
            ...result,
            error: ""
        });
    } catch (error) {
        console.log(error);
        return parseServerActionResponse({ status: "ERROR", error: JSON.stringify(error) });
    }
}