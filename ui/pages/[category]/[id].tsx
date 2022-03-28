import React from "react";

import { useRouter } from "next/router";

export default function test() {
    const router = useRouter();
    const { id } = router.query;
    const { category } = router.query;

    return (
        <div>{category} / {id}</div>
    )
}