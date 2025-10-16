"use client";

import { createContext, useContext, ReactNode } from 'react';
import { GuildInfo, GuildInfoModelOption } from '@/utils/types';
import { useGuildInfo as useGuildInfoHook } from '../hooks/useGuildInfo';

type GuildInfoContextType<T extends GuildInfoModelOption[]> = GuildInfo<T>;

let GuildInfoContext: ReturnType<typeof createContext<GuildInfoContextType<any> | null>> | null = null;

function getGuildInfoContext() {
    if (!GuildInfoContext) {
        GuildInfoContext = createContext<GuildInfoContextType<any> | null>(null);
    }
    return GuildInfoContext;
}

type GuildInfoProviderProps<T extends GuildInfoModelOption[]> = {
    guildInfoModel: T;
    initialGuildInfo: GuildInfo<T>;
    children: ReactNode;
}

export function GuildInfoProvider<T extends GuildInfoModelOption[]>({ 
    guildInfoModel,
    initialGuildInfo, 
    children 
}: GuildInfoProviderProps<T>) {
    const guildInfo = useGuildInfoHook(guildInfoModel, initialGuildInfo);
    const Context = getGuildInfoContext();

    return (
        <Context.Provider value={guildInfo}>
            {children}
        </Context.Provider>
    );
}

export function useGuildInfo<T extends GuildInfoModelOption[]>(): GuildInfo<T> {
    const Context = getGuildInfoContext();
    const context = useContext(Context);
    if (!context) {
        throw new Error('useGuildInfo must be used within GuildInfoProvider');
    }
    return context as GuildInfo<T>;
}

