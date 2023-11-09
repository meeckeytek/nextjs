import { useRouter } from 'next/router'
 
export default function Welcome() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}