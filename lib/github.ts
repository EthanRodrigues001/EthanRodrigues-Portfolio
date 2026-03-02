import { Activity } from "@/components/kibo-ui/contribution-graph";

export async function getGitHubContributions(username: string): Promise<Activity[]> {
    try {
        const response = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch contributions: ${response.statusText}`);
        }
        const data = await response.json();

        // The API returns contributions as an array of weeks (each week is an array of days).
        // We flatten this to a single array of days.
        const allDays = data.contributions.flat();

        const levelMap: Record<string, number> = {
            "NONE": 0,
            "FIRST_QUARTILE": 1,
            "SECOND_QUARTILE": 2,
            "THIRD_QUARTILE": 3,
            "FOURTH_QUARTILE": 4
        };

        return allDays.map((day: any) => ({
            date: day.date,
            count: day.contributionCount,
            level: levelMap[day.contributionLevel] ?? 0,
        }));
    } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        return [];
    }
}

