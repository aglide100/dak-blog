import React from "react";

import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter();
  const { id } = router.query;
  const { category } = router.query;

  return (
    <div>
      {category} / {id}
    </div>
  );
}
