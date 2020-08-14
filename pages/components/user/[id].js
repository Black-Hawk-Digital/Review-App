import { useRouter } from 'next/router';
import useSwr from 'swr';
import Header from '../../layouts/Header';
import Link from 'next/link';
import styles from './Card.module.css';




export default function User() {
const fetcher = (url) => fetch(url).then((res) => res.json())
  const router = useRouter();
 
  const { data, error } = useSwr(`https://reqres.in/api/users/${router.query.id}`, fetcher)
//  console.log(data);
  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>
console.log(data.data);  
const {first_name, last_name, email, avatar, id }= data.data;

  return (  <>
      <Header /> 

        <div className={styles.card}>
          <img src={avatar} alt="Avatar" style={{width: '100%'}} />
          <div className={styles.container}>
            <h4><b>{`${first_name} ${last_name}`}</b></h4> 
            <p>Web Developer</p>
            <Link href="/components/user/update/[id]" as={`/components/user/update/${id}`} variant="primary">Update</Link> 
          </div>
        </div>
  </>);

}
