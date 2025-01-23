import { client } from "@/sanity/lib/client";
import Ping from "./Ping";
import { STARTUPS_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const View = async ({ id }: { id: string }) => {
    const viewsFormatter = () => {
        return `${totalViews} view` + (totalViews > 1 ? "s" : "");
    }
    const { views: totalViews } = await client.withConfig({
        useCdn: false
    }).fetch(STARTUPS_VIEWS_QUERY, { id });

    after(async () => await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit())

    return <div className="view-container">
        <div className="absolute -top-2 -right-2">
            <Ping />
        </div>
        <p className="view-text">
            <span className="font-black">{viewsFormatter()}</span>
        </p>
    </div>;
};
export default View;