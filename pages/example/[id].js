import React from 'react';

import { useRouter } from 'next/router';

export default function Example() {
  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>Example - 1 </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ratione
        aliquid explicabo saepe cumque tempora. Tenetur, non. Voluptatibus est
        temporibus, molestiae unde magnam, corrupti ipsa alias tempora,
        inventore quo officia!
      </p>
    </div>
  );
}
