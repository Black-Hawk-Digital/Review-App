import { useRouter } from 'next/router';
import Header from '../../../layouts/Header';


export default function updateUser() {
    const router = useRouter();
    // console.log("hello");
    // console.log(router.query);
return (
<>
<Header />
<h1>This is update user page</h1>
</>
);

}