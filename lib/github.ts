import { Activity } from "@/components/kibo-ui/contribution-graph";

export async function getGitHubContributions(username: string): Promise<Activity[]> {
    try {
        const response = await fetch(`https://github-contributions-api.deno.dev/v1/${username}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch contributions: ${response.statusText}`);
        }
        const data = await response.json();

        // The API returns contributions for all years. We want to format them for the graph.
        // The graph expects an array of Activity: { date: string, count: number, level: number }

        return data.contributions.map((day: any) => ({
            date: day.date,
            count: day.count,
            level: day.level,
        }));
    } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        return [];
    }
}
