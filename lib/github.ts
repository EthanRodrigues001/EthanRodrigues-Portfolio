import { Activity } from "@/components/kibo-ui/contribution-graph";

export async function getGitHubContributions(username: string): Promise<Activity[]> {
    try {
        // github-contributions-api.deno.dev died with Deno Deploy Classic (Jul 2026).
        const response = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
            { next: { revalidate: 60 * 60 * 6 } }
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch contributions: ${response.statusText}`);
        }
        const data = await response.json();

        // Already one entry per day: { date, count, level (0-4) }.
        return data.contributions.map((day: Activity) => ({
            date: day.date,
            count: day.count,
            level: day.level,
        }));
    } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        return [];
    }
}

