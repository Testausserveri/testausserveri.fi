"use client";

import { Leaderboard, LeaderboardGroup } from '../components/Leaderboard/Leaderboard';
import { TimeUtil } from '@/utils/TimeUtil';
import Link from 'next/link';
import { useGuildInfo } from '@/contexts/GuildInfoContext';

export function LiveLeaderboards() {
    const guildInfo = useGuildInfo<["codingLeaderboard", "messagesLeaderboard"]>();

    return (
        <LeaderboardGroup>
            <Leaderboard
                data={guildInfo.messagesLeaderboard || []}
                title="Eniten viestejä viikon sisään" />

            <Leaderboard
                data={guildInfo.codingLeaderboard || []}
                title="Eniten koodannut viikon sisään"
                explanation={<span>
                    Tilasto kerätään koodieditoreiden <Link href="/projects/testaustime">Testaustime-lisäosalla</Link>
                </span>}
                valueFormatter={(sec) => TimeUtil.formatSecond(sec)} />
        </LeaderboardGroup>
    )
}

