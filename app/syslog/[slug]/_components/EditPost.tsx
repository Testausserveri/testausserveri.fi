"use client";

import { CapsuleButton } from "@/components/Button/CapsuleButton";
import { usePlausible } from "next-plausible";
import Link from "next/link";

type EditButtonProps = {
    small?: boolean;
    slug: string;
};
  
export default function EditButton({ small, slug }: EditButtonProps) {
    const plausible = usePlausible();

    return (
        <Link
        href={`https://github.com/Testausserveri/testausserveri.fi/blob/coal/posts/${slug}/post.mdx`}
        onClick={() => {
            plausible("editPost", {
            props: { editPostSlug: slug, editPostSource: "beforePost" },
            });
        }}
        >
        <CapsuleButton secondary small={small}>
            Muokkaa
        </CapsuleButton>
        </Link>
    );
}