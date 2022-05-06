import { useEffect, useState } from "react"

export async function getLeaderboard() {
    const response = await fetch("https://api.testausserveri.fi/v1/misc/codingLeaderboard")
    const data = await response.json()

    return data
}

export function useLeaderboard(ss) {
    const [leaderboard, setLeaderboard] = useState(ss || [])

    async function update() {
        console.log("Updating leaderboard")
        setLeaderboard(await getLeaderboard())
    }
    useEffect(() => {
        setInterval(update, 5000)
    }, [])

    return leaderboard
}