import { useStoreActions } from 'easy-peasy';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function SecuredRoute(props: any) {
  const router = useRouter();
  const { setLoginModal } = useStoreActions((actions: any) => actions.global);
  useEffect(() => {
    // checks if the user is authenticated
    if (!localStorage.getItem('token')) {
      setLoginModal(true);
      router.push('/');
    }
  }, []);

  return <div>{props.children}</div>;
}
