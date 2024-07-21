"use client";

import { CapsuleButton } from "@/components/Button/CapsuleButton";
import { PostDetails } from "@/utils/types";
import { useState } from "react";
import { PaginationResponse } from "./page/[index]/route";
import { PostsGrid } from "@/components/PostsGrid/PostsGrid";
import Separator from "@/components/Separator/Separator";

export default function MorePosts() {
    const [ pageIndex, setPageIndex ] = useState(1);
    const [ isMore, setIsMore ] = useState(true);
    const [ morePosts, setMorePosts ] = useState<PostDetails[]>([])

    async function loadMore() {
        const newPageIndex = pageIndex + 1;
        const res = await fetch(`/syslog/page/${newPageIndex}`);
        const posts: PaginationResponse = await res.json();
        setMorePosts(posts.posts);
        setPageIndex(newPageIndex);
        if (newPageIndex >= posts.pagesCount) {
            setIsMore(false);
        }
    }
    return (
        <>
            <PostsGrid posts={morePosts} columns={2} />
            { isMore ? 
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <CapsuleButton onClick={() => loadMore()}>Näytä lisää</CapsuleButton>
                </div>
            :
                <Separator>Loppu</Separator>}
        </>
    )
}